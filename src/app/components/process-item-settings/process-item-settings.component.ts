import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FieldTypeService } from '../../services/field-type.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { RandomIdGenerator } from 'src/app/services/general.service';
import { StepItem } from 'src/app/common/Models/ProcessItems/StepItem';
import { ProcessItem } from 'src/app/common/Models/ProcessItems/ProcessItem';
import { FieldInStep } from 'src/app/common/Models/Field/FieldInStep';
import { FieldType } from 'src/app/common/Models/Field/FieldType';
import { Field } from 'src/app/common/Models/Field/Field';
import { UserGroupService } from 'src/app/services/userGroup.service';
import { Group } from 'src/app/common/Models/Responsible/Group';
import { User } from 'src/app/common/Models/Responsible/User';
import { GroupAssignOption } from 'src/app/common/Models/Responsible/GroupAssignOption';
import { Process } from 'src/app/common/Models/ProcessItems/Process';
import { ResponsibleType } from 'src/app/common/Models/Responsible/ResponsibleType';
import { SelectionSettingsModel } from '@syncfusion/ej2-dropdowns';

import { ListBoxComponent, CheckBoxSelection, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { Subscription } from 'rxjs';
ListBoxComponent.Inject(CheckBoxSelection);

type FieldViewMode = 'listFields' | 'fieldEdit' | 'addExisting';

@Component({
  selector: 'app-process-item-settings',
  templateUrl: './process-item-settings.component.html',
  styleUrls: ['./process-item-settings.component.css']
})
export class ProcessItemSettingsComponent implements OnInit, OnDestroy {

  public visible = false;
  fieldsViewMode: FieldViewMode = 'listFields';

  @Input() process: Process;
  currentFieldInStep: FieldInStep;
  selectedUserIds = [];
  // tslint:disable-next-line: variable-name
  _selectedGroupIds = [];
  get selectedGroupIds() {
    return this._selectedGroupIds;
  }
  set selectedGroupIds(value: any[]) {
    console.log('value setter', value);
    this._selectedGroupIds = value;
    this.assignMultiselectValues(this.stepItem.responsible, 'groups', 'groupId', this.groups, value, null);
  }

  // tslint:disable-next-line: variable-name
  _processItem: ProcessItem;
  isStepFormDesignerVisible = false;


  // Loaded lists
  groups: Group[];
  users: User[];
  groupAssignOptions: GroupAssignOption[] = [];
  fieldTypes: FieldType[] = [];

  allResponsibleTypes: ResponsibleType[] = [];
  showingResponsibleTypes: ResponsibleType[] = [];

  private fieldChangeSubscription: Subscription;

  setShowingResponsibleTypes(): void {

    this.showingResponsibleTypes =
      this.allResponsibleTypes.filter(rt => !rt.isAdvancedOption || this.stepItem?.responsible?.visualState?.showAdvancedOptions);
  }

  get showAdvancedResponsibleTypes(): boolean {
    return this.stepItem?.responsible?.visualState?.showAdvancedOptions;
  }

  set showAdvancedResponsibleTypes(value: boolean) {
    this.stepItem.responsible.visualState.showAdvancedOptions = value;
    this.setShowingResponsibleTypes();
  }

  get processItems(): ProcessItem[] {
    return this.process.processItems;
  }

  get processItem(): ProcessItem {
    return this._processItem;
  }

  set processItem(value: ProcessItem) {

    if (this._processItem === value) {
      return;
    }

    this._processItem = value;

    // TODO: only if it is step item
    // TODO: explain why we make this call
    // TODO: are you handling null "value" here?
    this.initialise_Responsible_MultipleSelection_Variables();
    this.setShowingResponsibleTypes();
  }

  //#region step item

  get stepItem(): StepItem {
    return this.processItem as StepItem;
  }

  get renderingFieldsInStep(): FieldInStep[] {
    return this.stepItem.fieldsInStep.filter((value, index, arr) => !value.deleted);
  }

  //#endregion

  constructor(
    private fieldTypeService: FieldTypeService,
    private userGroupService: UserGroupService
  ) {
  }

  async ngOnInit() {
    this.fieldTypes = await this.fieldTypeService.getFieldTypes();
    this.groups = await this.userGroupService.getGroups();
    this.users = await this.userGroupService.getUsers();
    this.groupAssignOptions = await this.userGroupService.getGroupAssignOptions();
    this.allResponsibleTypes = this.userGroupService.getResponsibleTypes();

    this.subscribeFieldChanges();
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  unsubscribe() {
    this.fieldChangeSubscription?.unsubscribe();
  }

  async open(processItem: ProcessItem) {
    this.processItem = processItem;
    this.visible = true;
  }

  async close() {
    this.processItem = null;
    this.visible = false;
  }

  //#region responsible - step item functions

  initialise_Responsible_MultipleSelection_Variables() {
    this.selectedUserIds = (this.stepItem?.responsible?.users ?? []).map(u => u.userId);
    this.selectedGroupIds = (this.stepItem?.responsible?.groups ?? []).map(g => g.groupId);
  }

  subscribeFieldChanges() {
    this.updateEnabledResponsibleTypes();

    this.fieldChangeSubscription =
      this.process.fieldsChange$.subscribe(fc => {
        this.updateEnabledResponsibleTypes();
      });
  }

  updateEnabledResponsibleTypes() {
    this.allResponsibleTypes.forEach(rt => {
      rt.visualState.enabled = true;

      const groupFieldSelectionWithNoGroupField =
        rt.code === 'groupFromField' &&
        this.process.groupTypeFields.length === 0;

      const userFieldSelectionWithNoUserField =
        rt.code === 'userFromField' &&
        this.process.userTypeFields.length === 0;

      const groupListSelectionWithNoRelevantField =
        rt.code === 'groupListFromField' &&
        this.process.multipleGroupTypeFields.length === 0;

      const userListWithSelectionNoRelevantField =
        rt.code === 'userListFromField' &&
        this.process.multipleUserTypeFields.length === 0;

      if (groupFieldSelectionWithNoGroupField ||
        userFieldSelectionWithNoUserField ||
        groupListSelectionWithNoRelevantField ||
        userListWithSelectionNoRelevantField) {
        rt.visualState.enabled = false;
      }
    });
  }

  //#endregion

  //#region field - step item functions

  openFieldEditViewForNewField() {

    const addNewFieldResult = this.process.addNewField(this.stepItem);

    this.currentFieldInStep = addNewFieldResult.createdFieldInStep;

    this.fieldsViewMode = 'fieldEdit';
  }

  removeFieldInStep(fieldInStep: FieldInStep) {
    fieldInStep.deleted = true;
  }

  openFieldEditViewForExistingField(fieldInStep: FieldInStep) {
    this.currentFieldInStep = fieldInStep;
    this.fieldsViewMode = 'fieldEdit';
  }

  openAddExistingFieldView() {
    this.fieldsViewMode = 'addExisting';
  }

  openListFields() {
    this.fieldsViewMode = 'listFields';
  }

  swapStepFormDesignerVisible() {
    this.isStepFormDesignerVisible = !this.isStepFormDesignerVisible;
  }

  onProcessItemChange() {
    this.fieldsViewMode = 'listFields';
  }

  onStepItemSettingsTabChanged($event) {
    this.fieldsViewMode = 'listFields';
  }

  //#endregion

  search<T>(array: T[], selectorFunc: (obj: T) => string, filter: string): T[] {
    if (filter === '' || filter == null) {
      return array;
    }
    return array.filter(i => selectorFunc(i).toLowerCase().indexOf(filter.toLowerCase()) > -1);
  }

  // TODO: move to a base component?
  assignMultiselectValues(
    parentObjectOfModel: any,
    fieldNameOfModel: string,
    idFieldNameInModel: string,
    selectableListOfItems: any[],
    selectedItemIds: any[],
    event: any
  ) {
    console.log(event)
    // TODO: handling a selected object which is not present in the list?
    const selectedItems = selectableListOfItems.filter(
      item =>
        selectedItemIds.some(selectedItemId =>
          selectedItemId === item[idFieldNameInModel]));

    parentObjectOfModel[fieldNameOfModel] = selectedItems;
  }
}
