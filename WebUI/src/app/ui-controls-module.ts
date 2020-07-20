import { NgModule } from '@angular/core';
import { DropDownListModule, ListBoxModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';


@NgModule({
  exports: [
    DropDownListModule,
    ListBoxModule,
    MultiSelectModule,
    CheckBoxModule,
    TextBoxModule,
    SidebarModule
  ]
})
export class UiControlsModule { }
