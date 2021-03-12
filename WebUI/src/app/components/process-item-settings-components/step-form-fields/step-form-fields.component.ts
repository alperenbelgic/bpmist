import { Component, OnInit, Input } from '@angular/core';
import { FieldInStep } from 'src/app/common/Models/Field/FieldInStep';
import { FieldType } from 'src/app/common/Models/Field/FieldType';
import { FieldTypeService } from 'src/app/services/Business/field-type.service';
import { ProcessItem } from 'src/app/common/Models/ProcessItems/ProcessItem';
import { Process } from 'src/app/common/Models/ProcessItems/Process';
import { StepItem } from 'src/app/common/Models/ProcessItems/StepItem';

type FieldViewMode = 'listFields' | 'fieldEdit' | 'addExisting';


@Component({
  selector: 'app-step-form-fields',
  templateUrl: './step-form-fields.component.html',
  styleUrls: ['./step-form-fields.component.css']
})
export class StepFormFieldsComponent implements OnInit {

  fieldsViewMode: FieldViewMode = 'listFields';

  currentFieldInStep: FieldInStep;

  // loaded lists
  fieldTypes: FieldType[] = [];

  _processItem: ProcessItem;

  @Input() process: Process;

  isStepFormDesignerVisible = false;

  get stepItem(): StepItem {
    return this.processItem as StepItem;
  }

  constructor(
    private fieldTypeService: FieldTypeService
  ) { }

  async ngOnInit() {
    this.fieldTypes = await this.fieldTypeService.getFieldTypes();

  }
  get processItems(): ProcessItem[] {
    return this.process.processItems;
  }

  get processItem(): ProcessItem {
    return this._processItem;
  }

  @Input() set processItem(value: ProcessItem) {

    if (this._processItem === value) {
      return;
    }

    this._processItem = value;
  }


  get renderingFieldsInStep(): FieldInStep[] {
    return this.stepItem.fieldsInStep.filter((value, index, arr) => !value.deleted);
  }

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

  resetViewMode() {
    this.fieldsViewMode = 'listFields';
  }

}
