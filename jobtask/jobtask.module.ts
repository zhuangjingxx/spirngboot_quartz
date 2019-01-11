import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { JobtaskRoutingModule } from './jobtask-routing.module';

import { JobtaskViewComponent } from './view/view.component';
import { JobtaskEditComponent } from './edit/edit.component';
import {JobtaskComponent} from "./jobtask.component";

const COMPONENTS = [
  JobtaskComponent];
const COMPONENTS_NOROUNT = [
  JobtaskViewComponent,
  JobtaskEditComponent];

@NgModule({
  imports: [
    SharedModule,
    JobtaskRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class JobtaskModule { }
