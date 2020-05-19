import { Component, OnInit, Input } from '@angular/core';
import { ProcessItem, StepItem } from '../process-item/process-item.component';
import { FieldTypeService, FieldType, Field } from '../../services/field-type.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-process-item-settings',
  templateUrl: './process-item-settings.component.html',
  styleUrls: ['./process-item-settings.component.css']
})
export class ProcessItemSettingsComponent implements OnInit {

  form = new FormGroup({});
  model2 = { email: 'email@gmail.com', Checkbox: false };
  fields2: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      key: 'email2',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      key: 'Checkbox',
      type: 'checkbox',
      templateOptions: {
        label: 'the label',
        description: 'the description',
        // pattern: 'true',
        required: true,
      },
      validation: {
        messages: {
          pattern: 'Please accept the terms',
        },
      },
    },
    {
      key: 'email3',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      key: 'email4',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
  ];

  onSubmit() {
    console.log(this.model2);
  }

  processItemSettingsForm: FormGroup;

  get fieldsFormArray(): FormArray {
    return this.processItemSettingsForm.get('fields') as FormArray;
  }

  public visible = false;
  _stepItem: StepItem;

  isStepFormDesignerVisible = false;

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
      isRequired: false,
      hasMinValueRestriction: false,
      minValue: null,
      hasMaxValueRestriction: false,
      maxValue: null
    }));
  }

  swapSettingVisible(fieldGroupValue: any) {
    fieldGroupValue.visualState.settingsVisible = !fieldGroupValue.visualState.settingsVisible;
  }

  swapStepFormDesignerVisible() {
    this.isStepFormDesignerVisible = !this.isStepFormDesignerVisible;
  }
}
