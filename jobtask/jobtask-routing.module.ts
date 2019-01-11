import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobtaskComponent } from './jobtask.component';

const routes: Routes = [

  { path: 'jobtask', component: JobtaskComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobtaskRoutingModule { }
