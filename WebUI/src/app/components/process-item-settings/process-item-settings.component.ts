import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FieldTypeService } from '../../services/Business/field-type.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { RandomIdGenerator } from '../../services/Business/general.service';
import { StepItem } from '../../common/Models/ProcessItems/StepItem';
import { ProcessItem } from '../../common/Models/ProcessItems/ProcessItem';
import { FieldInStep } from '../../common/Models/Field/FieldInStep';
import { FieldType } from '../../common/Models/Field/FieldType';
import { Field } from '../../common/Models/Field/Field';
import { UserGroupService } from '../../services/Business/userGroup.service';
import { Group } from '../../common/Models/Responsible/Group';
import { User } from '../../common/Models/Responsible/User';
import { GroupAssignOption } from '../../common/Models/Responsible/GroupAssignOption';
import { Process } from '../../common/Models/ProcessItems/Process';
import { ResponsibleType } from '../../common/Models/Responsible/ResponsibleType';
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


  // tslint:disable-next-line: variable-name
  _processItem: ProcessItem;
  isStepFormDesignerVisible = false;


  // Loaded lists

  fieldTypes: FieldType[] = [];

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
    private fieldTypeService: FieldTypeService
  ) {
  }

  async ngOnInit() {
    this.fieldTypes = await this.fieldTypeService.getFieldTypes();

  }

  ngOnDestroy() {
  }

  unsubscribe() {
  }

  async open(processItem: ProcessItem) {
    this.processItem = processItem;
    this.visible = true;
  }

  async close() {
    this.visible = false;
    this.processItem = null;
  }

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


}
