import { Component, OnInit, Input } from '@angular/core';
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

type FieldViewMode = 'listFields' | 'fieldEdit' | 'addExisting';


@Component({
  selector: 'app-process-item-settings',
  templateUrl: './process-item-settings.component.html',
  styleUrls: ['./process-item-settings.component.css']
})
export class ProcessItemSettingsComponent implements OnInit {


  get processItems(): ProcessItem[] {
    return this.process.processItems;
  }

  public visible = false;
  // tslint:disable-next-line: variable-name
  _processItem: ProcessItem;

  isStepFormDesignerVisible = false;

  groups: Group[];

  users: User[];

  groupAssignOptions: GroupAssignOption[] = [];

  get processItem(): ProcessItem {
    return this._processItem;
  }

  set processItem(value: ProcessItem) {
    this._processItem = value;
  }

  @Input() process: Process;

  //#region step item

  get stepItem(): StepItem {
    return this.processItem as StepItem;
  }

  get renderingFieldsInStep(): FieldInStep[] {
    return this.stepItem.fieldsInStep.filter((value, index, arr) => !value.deleted);
  }

  currentFieldInStep: FieldInStep;

  fieldTypes: FieldType[] = [];

  fieldsViewMode: FieldViewMode = 'listFields';

  //#endregion

  constructor(
    private fieldTypeService: FieldTypeService,
    private randomIdGenerator: RandomIdGenerator,
    private userGroupService: UserGroupService
  ) {
  }

  async ngOnInit() {
    this.fieldTypes = await this.fieldTypeService.getFieldTypes();
    this.groups = await this.userGroupService.getGroups();
    this.users = await this.userGroupService.getUsers();
    this.groupAssignOptions = await this.userGroupService.getGroupAssignOptions();

  }

  async open(processItem: ProcessItem) {
    this.processItem = processItem;
    this.visible = true;
  }

  async close() {
    this.processItem = null;
    this.visible = false;
  }

  //#region field - step item functions

  openFieldEditViewForNewField() {

    // this.currentFieldInStep =
    //   new FieldInStep(
    //     this.randomIdGenerator.generate(),
    //     false,
    //     new Field(this.randomIdGenerator.generate()),
    //     false,
    //     false);

    // this.stepItem.fieldsInStep.push(this.currentFieldInStep);

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

  //#region responsible - step item functions

  groupAutoCompleteDisplayFn(group: Group): string | undefined {
    return group?.groupName;
  }

  userAutoCompleteDisplayFn(user: User): string | undefined {
    return user?.userName;
  }

  //#endregion

}
