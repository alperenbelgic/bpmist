import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessDesignerComponent } from "./process-designer/process-designer.component";


const routes: Routes = [
  { path: 'process-designer', component: ProcessDesignerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
