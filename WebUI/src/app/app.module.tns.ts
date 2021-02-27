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

@NgModule({
    providers: [
        {
        provide: HTTP_INTERCEPTORS, useClass: AuthKeyInterceptor, multi: true
    }],

    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        NativeScriptFormsModule,
        NativeScriptUIDataFormModule
    ],
    declarations: [
        AppComponent,
        ListProcessesComponent,
        EditTaskComponent,
        FormComponent,
        TaskCompletedComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
