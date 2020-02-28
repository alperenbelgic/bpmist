import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
