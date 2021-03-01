import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { RenderingField } from '../../form/form.component';
import { ModalDialogService, ModalDialogOptions } from "@nativescript/angular";
import { isIOS } from '@nativescript/core';
import { DatePickerComponent } from './date-picker/date-picker.component.tns';
@Component({
    selector: 'app-date-field',
    templateUrl: './date-field.component.html',
    styleUrls: ['./date-field.component.css']
})
export class DateFieldComponent {

    _field: RenderingField = null;
    get field(): RenderingField { return this._field; }
    @Input() set field(value: RenderingField) {
        this._field = value;
        this.SetDateInText();
        this.SubscribeValueChange();
    }

    dateValueChangeSubscription$ = null;
    dateInText: string = '';


    constructor(
        private modalService: ModalDialogService, private vcRef: ViewContainerRef

    ) { }

    ngOnDestroy(): void {
        this.unsubscribeResources();
    }

    open() {

        this.createModelView().then(result => {

            // handle null and undefined seperately
            // null is for clear, undefined is for no action.
            if (result === null) {
                this.field.fieldValue = null;
            }
            else if (result === undefined) {
                // no action
            }
            else if (Object.prototype.toString.call(result) === '[object Date]') {
                this.field.fieldValue = result;
            }
            console.log(result);
        }).catch(error => { });
    }

    private createModelView(): Promise<any> {
        const options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: this.field.fieldValue,
            fullscreen: false,
        };

        // showModal returns a promise with the received parameters from the modal page
        return this.modalService.showModal(DatePickerComponent, options);
    }

    SubscribeValueChange() {
        this.unsubscribeResources();

        this.dateValueChangeSubscription$ = this.field.formControl.valueChanges.subscribe({
            next: v => {
                this.SetDateInText();
            }
        });
    }

    unsubscribeResources() {
        if (this.dateValueChangeSubscription$ != null) {
            try {
                this.dateValueChangeSubscription$.unsubscribe();
            }
            finally { }
        }
    }

    SetDateInText() {
        if (this._field == null ||
            this._field.fieldValue == null ||
            Object.prototype.toString.call(this._field.fieldValue) !== '[object Date]') {
            this.dateInText = '';
        }
        else {
            const dateValue = (this._field.fieldValue as Date);

            this.dateInText = dateValue.getDate().toString() + '/' + (dateValue.getMonth() + 1).toString() + '/' + dateValue.getFullYear().toString();
        }
    }
}
