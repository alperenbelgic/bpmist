import { Component, OnInit, Input } from '@angular/core';
import { ProcessItem, StepItem } from '../process-item/process-item.component';
import { FieldTypeService, FieldType, Field } from '../field-type.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-process-item-settings',
  templateUrl: './process-item-settings.component.html',
  styleUrls: ['./process-item-settings.component.css']
})
export class ProcessItemSettingsComponent implements OnInit {

  processItemSettingsForm: FormGroup;

  get fieldsFormArray(): FormArray {
    return this.processItemSettingsForm.get('fields') as FormArray;
  }

  public visible = false;
  _stepItem: StepItem;

  get stepItem(): StepItem {
    return this._stepItem;
  }

  @Input('stepItem')
  set stepItem(value: StepItem) {
    this._stepItem = value;

    if (this.stepItem == null) {
      this.processItemSettingsForm.reset();
    }
    else {
      this.processItemSettingsForm = this.fb.group({
        fields: this.fb.array(this._stepItem.fields)
      });
    }
  }

  fields: Field[] = [];

  fieldTypes: FieldType[] = [];

  constructor(private fb: FormBuilder,
    private fieldTypeService: FieldTypeService) {
  }

  async ngOnInit() {
    this.fieldTypes = await this.fieldTypeService.getFieldTypes();
  }

  async open(stepItem: StepItem) {
    this.stepItem = stepItem;
    this.visible = true;
  }

  async close() {
    this.stepItem = null;
    this.visible = false;
  }

  async addField() {
    this.fieldsFormArray.push(this.fb.group({
      name: '',
      fieldType: null,
      visualState: { settingsVisible: false },
      isRequired: false
    }));
  }

  swapSettingVisible(fieldGroupValue: any) {
    fieldGroupValue.visualState.settingsVisible = !fieldGroupValue.visualState.settingsVisible;
  }
}
