import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
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
import { StepFormFieldsComponent } from '../process-item-settings-components/step-form-fields/step-form-fields.component';
import { FieldDefinitionEditorComponent } from '../process-item-settings-components/field-definition-editor/field-definition-editor.component';
ListBoxComponent.Inject(CheckBoxSelection);

@Component({
  selector: 'app-process-item-settings',
  templateUrl: './process-item-settings.component.html',
  styleUrls: ['./process-item-settings.component.css']
})
export class ProcessItemSettingsComponent implements OnInit, OnDestroy {


  @ViewChild('stepFormFields') stepFormFieldsComponent: StepFormFieldsComponent;
  @ViewChild('fieldDefinitionEditor') fieldDefinitionEditor: FieldDefinitionEditorComponent;

  public visible = false;

  @Input() process: Process;


  // tslint:disable-next-line: variable-name
  _processItem: ProcessItem;


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


  //#endregion

  fieldTypes: FieldType[] = [];

  constructor(
    private fieldTypeService: FieldTypeService
  ) {

  }

  ngOnInit() {
    this.fieldTypeService.getFieldTypes().then(v => { this.fieldTypes = v; });
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


  onProcessItemChange() {
    this.stepFormFieldsComponent.resetViewMode();
  }

  onStepItemSettingsTabChanged($event) {
    this.stepFormFieldsComponent.resetViewMode();
  }

  //#endregion

  search<T>(array: T[], selectorFunc: (obj: T) => string, filter: string): T[] {
    if (filter === '' || filter == null) {
      return array;
    }
    return array.filter(i => selectorFunc(i).toLowerCase().indexOf(filter.toLowerCase()) > -1);
  }
  currentFieldChanged(fieldInStep: FieldInStep) {
    this.fieldDefinitionEditor.show(fieldInStep);
  }
}
