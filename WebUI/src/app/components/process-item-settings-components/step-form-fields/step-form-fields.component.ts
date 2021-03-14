import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { FieldInStep } from 'src/app/common/Models/Field/FieldInStep';
import { FieldType } from 'src/app/common/Models/Field/FieldType';
import { FieldTypeService } from 'src/app/services/Business/field-type.service';
import { ProcessItem } from 'src/app/common/Models/ProcessItems/ProcessItem';
import { Process } from 'src/app/common/Models/ProcessItems/Process';
import { StepItem } from 'src/app/common/Models/ProcessItems/StepItem';

//type FieldViewMode = 'listFields' | 'fieldEdit' | 'addExisting';


@Component({
  selector: 'app-step-form-fields',
  templateUrl: './step-form-fields.component.html',
  styleUrls: ['./step-form-fields.component.css']
})
export class StepFormFieldsComponent implements OnInit {

  @ViewChildren('formFields') formFieldsViewChildren: QueryList<ElementRef>;

  editingField: FieldInStep;

  // loaded lists
  @Input() fieldTypes: FieldType[] = [];

  _processItem: ProcessItem;

  @Input() process: Process;

  @Output() currentFieldChanged = new EventEmitter<FieldInStep>();

  isStepFormDesignerVisible = false;

  _currentFieldInStep: FieldInStep;
  get currentFieldInStep() {
    return this._currentFieldInStep;
  }
  set currentFieldInStep(val: FieldInStep) {
    this._currentFieldInStep = val;
    this.currentFieldChanged.emit(val);
  }

  get stepItem(): StepItem {
    return this.processItem as StepItem;
  }

  constructor(
  ) { }

  async ngOnInit() {
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

    setTimeout(() => {
      this.formFieldsViewChildren?.last?.nativeElement?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }

  removeFieldInStep(fieldInStep: FieldInStep) {
    this.currentFieldInStep = null;
    fieldInStep.deleted = true;
  }

  openFieldEditViewForExistingField(fieldInStep: FieldInStep) {
    if (this.currentFieldInStep == fieldInStep) {
      this.currentFieldInStep = null;
    }
    else {
      this.currentFieldInStep = fieldInStep;
    }

  }

  openAddExistingFieldView() {

  }

  openListFields() {
    this.currentFieldInStep = null;
  }

  swapStepFormDesignerVisible() {
    this.isStepFormDesignerVisible = !this.isStepFormDesignerVisible;
  }

  resetViewMode() {
    this.currentFieldInStep = null;
  }

  fieldInStepReadOnlyChanged() {
    if (this.currentFieldInStep?.readOnly) {
      this.currentFieldInStep = null;
    }
  }

}
