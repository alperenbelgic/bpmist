import { Component, OnInit, Input } from '@angular/core';
import { RenderingField } from '../../form/form.component';
import { RadDataFormComponent } from 'nativescript-ui-dataform/angular';
import { isIOS } from '@nativescript/core';
declare var NSDateFormatter: any;
declare var java: any;

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.css']
})
export class DateFieldComponent implements OnInit {

    model: any = { value: null };

    _field: RenderingField = null;
    get field(): RenderingField{ return this._field; }
    @Input() set field(value: RenderingField){
        this.model.value = value.fieldValue;
        this._field = value;
    }

  constructor() { }

  ngOnInit(): void {
}

public propertyCommitted(args) {
    this.field.fieldValue = this.model.value;
}

public onEditorUpdate(args) {

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
