import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

import { ViewchildrenComponent } from './viewchildren.component';

const routes: Routes = [
  {
    path: '',
    component: ViewchildrenComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewchildrenRoutesModule { }
