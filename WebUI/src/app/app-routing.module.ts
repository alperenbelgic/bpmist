import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessDesignerComponent } from './components/process-designer/process-designer.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { ListProcessesComponent } from './components/list-processes/list-processes.component';


const routes: Routes = [
  { path: '', component: ListProcessesComponent },
  { path: 'NewTask/:processId', component: EditTaskComponent },
  { path: 'EditTask/:processId/:instanceId/:taskInstanceId', component: EditTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
