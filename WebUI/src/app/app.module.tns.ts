import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, NativeScriptHttpClientModule, NativeScriptFormsModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ListProcessesComponent } from './components/list-processes/list-processes.component';

import { AuthKeyInterceptor } from './services/Web/auth-key.interceptor';

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
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        ListProcessesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
