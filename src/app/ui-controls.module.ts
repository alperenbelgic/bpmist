import { NgModule } from '@angular/core';
import { DropDownListModule, ListBoxModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';


@NgModule({
  exports: [
    DropDownListModule,
    ListBoxModule,
    MultiSelectModule,
    CheckBoxModule
  ]
})
export class UiControlsModule { }
