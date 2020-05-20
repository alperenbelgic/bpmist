import { Component, OnInit, Input } from '@angular/core';
import { ProcessItem, StepItem } from '../process-item/process-item.component';
import { FieldTypeService, FieldType, Field } from '../../services/field-type.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { RandomIdGenerator } from 'src/app/services/general.service';

@Component({
  selector: 'app-process-item-settings',
  templateUrl: './process-item-settings.component.html',
  styleUrls: ['./process-item-settings.component.css']
})
export class ProcessItemSettingsComponent implements OnInit {

  // form = new FormGroup({});
  // model2 = { email: 'email@gmail.com', Checkbox: false };
  // fields2: FormlyFieldConfig[] = [
  //   {
  //     key: 'email',
  //     type: 'input',
  //     templateOptions: {
  //       label: 'Email address',
  //       placeholder: 'Enter email',
  //       required: true,
  //     }
  //   },
  //   {
  //     key: 'email2',
  //     type: 'input',
  //     templateOptions: {
  //       label: 'Email address',
  //       placeholder: 'Enter email',
  //       required: true,
  //     }
  //   },
  //   {
  //     key: 'Checkbox',
  //     type: 'checkbox',
  //     templateOptions: {
  //       label: 'the label',
  //       description: 'the description',
  //       // pattern: 'true',
  //       required: true,
  //     },
  //     validation: {
  //       messages: {
  //         pattern: 'Please accept the terms',
  //       },
  //     },
  //   },
  //   {
  //     key: 'email3',
  //     type: 'input',
  //     templateOptions: {
  //       label: 'Email address',
  //       placeholder: 'Enter email',
  //       required: true,
  //     }
  //   },
  //   {
  //     key: 'email4',
  //     type: 'input',
  //     templateOptions: {
  //       label: 'Email address',
  //       placeholder: 'Enter email',
  //       required: true,
  //     }
  //   },
  // ];

  // onSubmit() {
  //   console.log(this.model2);
  // }

  @Input() processItems: ProcessItem[] = [];

  processItemSettingsForm: FormGroup;

  public visible = false;
  _processItem: ProcessItem;

  isStepFormDesignerVisible = false;

  get stepItem(): StepItem {
    return this.processItem as StepItem;
  }

  get processItem(): ProcessItem {
    return this._processItem;
  }

  @Input('processItem')
  set processItem(value: ProcessItem) {
    this._processItem = value;

    if (this.processItem == null) {
      this.processItemSettingsForm.reset();
    } else {

      if (this.processItem.constructor.name === 'StepItem') {
        this.processItemSettingsForm = this.fb.group({
          fields: this.fb.array((this.processItem as StepItem).fields)
        });
      }
    }
  }

  fields: Field[] = [];

  fieldTypes: FieldType[] = [];

  constructor(private fb: FormBuilder,
    private fieldTypeService: FieldTypeService,
    private randomIdGenerator: RandomIdGenerator
    ) {
  }

  async ngOnInit() {
    this.fieldTypes = await this.fieldTypeService.getFieldTypes();
  }

  async open(processItem: ProcessItem) {
    this.processItem = processItem;
    this.visible = true;
  }

  async close() {
    this.processItem = null;
    this.visible = false;
  }

  async addField() {
    (this.processItem as StepItem).fields.push(new Field(this.randomIdGenerator.generate()));
  }

  swapSettingVisible(field: Field) {
    field.visualState.settingsVisible = !field.visualState.settingsVisible;
  }

  swapStepFormDesignerVisible() {
    this.isStepFormDesignerVisible = !this.isStepFormDesignerVisible;
  }
}
