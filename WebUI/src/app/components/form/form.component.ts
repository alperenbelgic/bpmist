import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  // // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  @Input() form: any;

  fields: RenderingField[] = [];

  formGroup: FormGroup;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {

    if (this.form?.Fields == null) {
      return;
    }

    this.fields =
      (this.form.Fields as any[]).map(f => {
        const field = new RenderingField();
        field.fieldId = f.FieldId;
        field.fieldName = f.FieldName;
        field.fieldType = f.ValueType;
        field.fieldValue = null;
        return field;
      });

    this.formGroup = new FormGroup({});

    this.fields.forEach(field => {
      this.formGroup.addControl(field.fieldName, field.formControl);
    });

    this.cd.detectChanges();

    this.formGroup.valueChanges.subscribe({
      next: v => {
        this.cd.detectChanges();
      }
    });
  }

  getReturningForm(): ReturningForm {
    const returningForm = new ReturningForm();

    this.fields.filter(f => f.fieldType === 'Date').forEach(f => {
      // Date values are kept as DateTime (containing date and time parts)
      // and they are considered in local time at midnight
      // They are converted to UTC.
      // and in some local time zones (such as BST) they have yesterday's Date after conversion
      // In order to prevent this, we pass them as integer arrays as [year, month(January=1), day]
      let dateValueArray: number[] = null;

      if (f.fieldValue != null) {
        const dateValue: Date = f.fieldValue as Date;
        dateValueArray = [dateValue.getFullYear(), dateValue.getMonth() + 1, dateValue.getDate()];
      }

      returningForm.DateTimeValues[f.fieldId] = dateValueArray;
    });

    return returningForm;
  }
}

export class ReturningForm {
  DateTimeValues: any = {};
}

export class RenderingField {
  constructor() {
    this._formControl = new FormControl();
    this.formControl.valueChanges.subscribe({
      next: v => {
        // if form control triggers a change we set the field (not the property)
        // the property setter also sets to the formControl
        if (this._fieldValue !== v) {
          this._fieldValue = v;
        }
      }
    });
  }
  fieldId: string;
  fieldName: string;
  fieldType: string;
  private _fieldValue: any = null;
  get fieldValue(): any {
    return this._fieldValue;
  }
  set fieldValue(value: any) {
    if (this._fieldValue !== value) {
      this._fieldValue = value;
      this.formControl.setValue(value);
    }
  }
  private _formControl;
  get formControl(): FormControl {
    return this._formControl;
  }
}
