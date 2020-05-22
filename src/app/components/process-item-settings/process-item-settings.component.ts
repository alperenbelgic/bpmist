import { Component, OnInit, Input } from '@angular/core';
import { ProcessItem, StepItem } from '../process-item/process-item.component';
import { FieldTypeService, FieldType, Field, FieldInStep } from '../../services/field-type.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { RandomIdGenerator } from 'src/app/services/general.service';

type FieldViewMode = 'listFields' | 'fieldEdit' | 'addExisting';


@Component({
  selector: 'app-process-item-settings',
  templateUrl: './process-item-settings.component.html',
  styleUrls: ['./process-item-settings.component.css']
})
export class ProcessItemSettingsComponent implements OnInit {


  @Input() processItems: ProcessItem[] = [];

  public visible = false;
  _processItem: ProcessItem;

  isStepFormDesignerVisible = false;

  get processItem(): ProcessItem {
    return this._processItem;
  }

  @Input('processItem')
  set processItem(value: ProcessItem) {
    this._processItem = value;
  }

  get stepItem(): StepItem {
    return this.processItem as StepItem;
  }

  currentFieldInStep: FieldInStep;

  fieldTypes: FieldType[] = [];

  fieldsViewMode: FieldViewMode = 'listFields';

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

  openAddFieldView() {

    this.currentFieldInStep =
      new FieldInStep(this.randomIdGenerator.generate(), false, new Field(this.randomIdGenerator.generate()), false, false);

    this.stepItem.fieldsInStep.push(this.currentFieldInStep);

    this.fieldsViewMode = 'fieldEdit';
  }

  openAddExistingFieldView() {
    this.fieldsViewMode = 'addExisting';
  }

  async addField() {
    this.stepItem.fieldsInStep.push(
      new FieldInStep(
        this.randomIdGenerator.generate(),
        false,
        new Field(this.randomIdGenerator.generate()), false, false));
  }

  swapStepFormDesignerVisible() {
    this.isStepFormDesignerVisible = !this.isStepFormDesignerVisible;
  }

  onProcessItenmChange() {
    this.fieldsViewMode = 'listFields';
  }

  onStepItemSettingsTabChanged($event) {
    this.fieldsViewMode = 'listFields';
  }

}
