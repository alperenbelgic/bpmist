import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, NativeScriptHttpClientModule, NativeScriptFormsModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ListProcessesComponent } from './components/list-processes/list-processes.component';

import { AuthKeyInterceptor } from './services/Web/auth-key.interceptor';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { FormComponent } from './components/form/form.component';
import { TaskCompletedComponent } from './components/task-completed/task-completed.component';
import { GenericFieldComponent } from './components/fields/generic-field/generic-field.component';
import { DateFieldComponent } from './components/fields/date-field/date-field.component';
import { TextFieldComponent } from './components/fields/text-field/text-field.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { ModalDialogService, ModalDialogOptions } from "@nativescript/angular";
import { DatePickerComponent } from './components/fields/date-field/date-picker/date-picker.component.tns';

import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';

@NgModule({
    providers: [
        {
        provide: HTTP_INTERCEPTORS, useClass: AuthKeyInterceptor, multi: true
    },
    ModalDialogService
    ],

    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
        NativeScriptUIDataFormModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        ListProcessesComponent,
        EditTaskComponent,
        LeftMenuComponent,
        FormComponent,
        TaskCompletedComponent,
        GenericFieldComponent,
        DateFieldComponent,
        TextFieldComponent,
        DatePickerComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
