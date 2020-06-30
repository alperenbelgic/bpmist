import { NgModule } from '@angular/core';
import { DropDownListModule, ListBoxModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';


@NgModule({
  exports: [
    DropDownListModule,
    ListBoxModule,
    MultiSelectModule,
    CheckBoxModule,
    TextBoxModule
  ]
})
export class UiControlsModule { }
