import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { DataFormEditorType, PropertyEditor, EntityProperty } from 'nativescript-ui-dataform';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular';
import { isIOS } from '@nativescript/core';
declare var NSDateFormatter: any;
declare var java: any;

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

    @Input() form: any;

    formValues: any;

    @ViewChild('myRuntimeDataFormComp', { static: false }) myRuntimeDataFormComp: RadDataFormComponent;

    //   fields: RenderingField[] = [];

    //   formGroup: FormGroup;

    @Output() formValid = new EventEmitter<boolean>();

    constructor(private cd: ChangeDetectorRef) { }

    getValue(fieldFromBackend: any): any {

        if (fieldFromBackend.FieldValue == null) {
            return null;
        }

        if (fieldFromBackend.FieldType === 'Date') {

            try {
                const numbers: any[] = fieldFromBackend.FieldValue;
                const year = numbers[0] as number;
                const month = (numbers[1] as number) - 1;
                const day = numbers[2] as number;

                return new Date(year, month, day);
            } catch {
                return null;
            }
        }

        return fieldFromBackend.FieldValue;
    }

    public onEditorUpdate(args) {

        let fieldId = args.propertyName;

        let field = (this.form.Fields as any[]).find(f => f.FieldId == fieldId);

        if (field != null) {

            try {
                if (field.FieldType === 'Date') {
                    if (isIOS) {
                        if (args?.editor?.dateFormatter != null) { // not sure how to confirm in an ios device
                            const dateFormatter = NSDateFormatter.alloc().init();
                            dateFormatter.dateFormat = "MM-yyyy-dd";

                            // args.editor.ios.dateFormatter = dateFormatter; (this version is probably incorrect but can't test on ios now)
                            args.editor.dateFormatter = dateFormatter;
                        }

                    } else {

                        if (args?.editor?.setDateFormat != null) {
                            let simpleDateFormat = new java.text.SimpleDateFormat("dd/MM/yyyy", java.util.Locale.US);

                            args.editor.setDateFormat(simpleDateFormat);
                        }
                    }
                }
            }
            catch (err) {
                console.log('onEditorUpdate error', err);
            }
        }
    }

    ngOnInit(): void {

        if (this.form?.Fields == null) {
            return;
        }

        // create all form fields as data
        this.formValues = {};

        (this.form.Fields as any[]).forEach(field => {
            this.formValues[field.FieldId] = this.getValue(field);
        });

        this.formValues["{A0A3DC51-67A3-4B9B-88CB-067376940DE2}"] = new Date(2015, 1, 22);
    }

    ngAfterViewInit() {
        (this.form.Fields as any[]).forEach(field => {
            let property = this.myRuntimeDataFormComp.dataForm.getPropertyByName(field.FieldId);
            property.displayName = field.FieldName;

            let propertyEditor = new PropertyEditor();

            if (field.FieldType === 'Date') {
                propertyEditor.type = DataFormEditorType.DatePicker;
            }
            else {
                propertyEditor.type = DataFormEditorType.Text;
            }

            property.editor = propertyEditor;
        });
    }

    getReturningForm(): ReturningForm {
        const returningForm = new ReturningForm();

        const objectKeys = Object.keys(this.formValues);

        objectKeys.forEach(fieldId => {

            let field = (this.form.Fields as any[]).find(f => f.FieldId == fieldId);

            if (field === null) {
                return;
            }

            let value = this.formValues[fieldId];
            if (field.FieldType === 'Date') {
                // Date values are kept as DateTime (containing date and time parts)
                // and they are considered in local time at midnight
                // They are converted to UTC.
                // and in some local time zones (such as BST) they have yesterday's Date after conversion
                // In order to prevent this, we pass them as integer arrays as [year, month(January=1), day]
                let dateValueArray: number[] = null;

                if (value != null) {
                    let dateValue: Date = value as Date;
                    dateValueArray = [dateValue.getFullYear(), dateValue.getMonth() + 1, dateValue.getDate()];
                }

                returningForm.DateValues[fieldId] = dateValueArray;
            }
            else if (field.fieldType === 'Text') {
                returningForm.TextValues[fieldId] = value;
            }
        });

        // this.fields.forEach(f => {
        //   if (f.fieldType === 'Date') {
        //     // Date values are kept as DateTime (containing date and time parts)
        //     // and they are considered in local time at midnight
        //     // They are converted to UTC.
        //     // and in some local time zones (such as BST) they have yesterday's Date after conversion
        //     // In order to prevent this, we pass them as integer arrays as [year, month(January=1), day]
        //     let dateValueArray: number[] = null;

        //     if (f.fieldValue != null) {
        //       const dateValue: Date = f.fieldValue as Date;
        //       dateValueArray = [dateValue.getFullYear(), dateValue.getMonth() + 1, dateValue.getDate()];
        //     }

        //     returningForm.DateValues[f.fieldId] = dateValueArray;
        //   }
        //   else if (f.fieldType === 'Text') {
        //     returningForm.TextValues[f.fieldId] = f.fieldValue;
        //   }
        // });

        return returningForm;
    }
}

export class ReturningForm {
    DateValues: any = {};
    TextValues: any = {};
}

export class RenderingField {

    constructor() {
        this._formControl = new FormControl();

        this.formControl.valueChanges.subscribe({
            next: v => {
                // if form control triggers a change we set the field (not the property)
                // the property setter also sets to the formControl

                if (this._fieldValue != v) {
                    this._fieldValue = v;
                }
            }
        });
    }

    fieldId: string;
    fieldName: string;
    fieldType: string;
    isReadOnly: boolean;

    private _fieldValue: any = null;
    get fieldValue(): any {
        return this._fieldValue;
    }
    set fieldValue(value: any) {
        if (this._fieldValue != value) {
            this._fieldValue = value;
            this.formControl.setValue(value);
        }
    }

    private _formControl: FormControl;
    get formControl(): FormControl {
        return this._formControl;
    }

    private _isRequired: boolean;
    get isRequired(): boolean {
        return this._isRequired;
    }
    set isRequired(value: boolean) {
        this._isRequired = value;

        // call this for any validation change
        this.updateValidators();
    }

    updateValidators() {
        this._formControl.clearValidators();

        const validators: ValidatorFn[] = [];

        if (this._isRequired) {
            validators.push(Validators.required);
        }

        if (validators.length > 0) {
            this._formControl.setValidators(validators);
        }

        this._formControl.updateValueAndValidity();
    }
}
