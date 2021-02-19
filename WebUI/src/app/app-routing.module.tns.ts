import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { ListProcessesComponent } from "./components/list-processes/list-processes.component";

const routes: Routes = [
    { path: '', component: ListProcessesComponent },
    { path: "asdf", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("./home/home.module").then((m) => m.HomeModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
