import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { ListProcessesComponent } from "./components/list-processes/list-processes.component";
import { EditTaskComponent } from './components/edit-task/edit-task.component';

const routes: Routes = [
    { path: '', component: ListProcessesComponent },
    { path: 'NewProcess/:processId', component: EditTaskComponent },
    { path: 'EditTask/:processId/:processInstanceId/:taskInstanceId', component: EditTaskComponent },
    { path: "asdf", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("./home/home.module").then((m) => m.HomeModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
