import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { ListProcessesComponent } from './components/list-processes/list-processes.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { MyGroupsTasksComponent } from './components/my-groups-tasks/my-groups-tasks.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/Auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: ListProcessesComponent },
      { path: 'NewProcess/:processId', component: EditTaskComponent },
      { path: 'EditTask/:processId/:processInstanceId/:taskInstanceId', component: EditTaskComponent },
      { path: 'MyInbox', component: ListTasksComponent },
      { path: 'MyGroupsInbox', component: MyGroupsTasksComponent },
      { path: 'Login', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
