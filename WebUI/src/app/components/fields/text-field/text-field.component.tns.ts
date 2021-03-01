import { Component, OnInit, Input } from '@angular/core';
import { RenderingField } from '../../form/form.component';

@Component({
    selector: 'app-text-field',
    templateUrl: './text-field.component.html',
    styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {

    text = '';

    _field: RenderingField = null;
    get field(): RenderingField { return this._field; }
    @Input() set field(value: RenderingField) {
        this._field = value;
        this.text = value?.fieldValue;
    }

    onTextChange($event) {
        if (this.text != $event.value) {
            this.text = $event.value;
        }

        this.field.fieldValue = $event.value;
    }

    constructor() { }

    ngOnInit(): void {
    }
}
