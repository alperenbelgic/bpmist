import { Component, OnInit, Input } from '@angular/core';
import { FieldInStep } from 'src/app/common/Models/Field/FieldInStep';
import { FieldType } from 'src/app/common/Models/Field/FieldType';
// import { Input } from '@syncfusion/ej2-angular-inputs/src';

@Component({
  selector: 'app-field-definition-editor',
  templateUrl: './field-definition-editor.component.html',
  styleUrls: ['./field-definition-editor.component.css']
})
export class FieldDefinitionEditorComponent implements OnInit {
  @Input() fieldInStep: FieldInStep;

  _fieldTypes: FieldType[];
  @Input() set fieldTypes(value: FieldType[]) {
    this._fieldTypes = value;
  }
  get fieldTypes() {
    return this._fieldTypes;
  }

  constructor() { }

  ngOnInit(): void {
  }

  show(fieldInStep: FieldInStep) {
    this.fieldInStep = fieldInStep;
  }

  hide() {
    this.fieldInStep = null;
  }

}
