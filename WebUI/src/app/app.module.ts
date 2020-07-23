import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material-module';
import { UiControlsModule } from './ui-controls-module';

import { ProcessDesignerComponent } from './components/process-designer/process-designer.component';
import { ProcessItemComponent } from './components/process-item/process-item.component';
import { ProcessItemSettingsComponent } from './components/process-item-settings/process-item-settings.component';

import { ClickStopPropagationDirective } from './common/Directives/click-stop-propagation.directive';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
import { MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { ListProcessesComponent } from './components/list-processes/list-processes.component';
import { TaskCompletedComponent } from './components/task-completed/task-completed.component';
import { CustomDateTimePipePipe } from './common/Pipes/custom-date-time-pipe.pipe';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { MyGroupsTasksComponent } from './components/my-groups-tasks/my-groups-tasks.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { FormComponent } from './components/form/form.component';
import { GenericFieldComponent } from './components/fields/generic-field/generic-field.component';
import { DateFieldComponent } from './components/fields/date-field/date-field.component';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};

@NgModule({
  declarations: [
    AppComponent,
    ProcessDesignerComponent,
    ProcessItemComponent,
    ProcessItemSettingsComponent,
    ClickStopPropagationDirective,
    EditTaskComponent,
    ListProcessesComponent,
    TaskCompletedComponent,
    CustomDateTimePipePipe,
    ListTasksComponent,
    MyGroupsTasksComponent,
    LeftMenuComponent,
    FormComponent,
    GenericFieldComponent,
    DateFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiControlsModule,
    FlexLayoutModule,
    FormlyMatDatepickerModule,
    FormlyMatToggleModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
