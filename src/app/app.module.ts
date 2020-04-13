import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material-module';

import { ProcessDesignerComponent } from './process-designer/process-designer.component';
import { ProcessItemComponent } from './process-item/process-item.component';
import { ProcessItemSettingsComponent } from './process-item-settings/process-item-settings.component';



@NgModule({
  declarations: [
    AppComponent,
    ProcessDesignerComponent,
    ProcessItemComponent,
    ProcessItemSettingsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
