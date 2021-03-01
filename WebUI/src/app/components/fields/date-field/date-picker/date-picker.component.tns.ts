import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { ModalDialogService, ModalDialogOptions, ModalDialogParams } from "@nativescript/angular";

@Component({
    selector: 'app-date-picker',
    templateUrl: './date-picker.component.html',
    providers: [],
    styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

    dateValue: Date = new Date();

    constructor(private params: ModalDialogParams) {

    }

    ngOnInit(): void {
        console.log('params.context', this.params.context);
        this.dateValue = (this.params.context ?? new Date());
    }

    pick() {
        this.params.closeCallback(this.dateValue);
    }

    clear() {
        this.params.closeCallback(null);
    }

    onDateChanged(args) {
        this.dateValue = args.value;
    }
}
