import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

import { ContentchildrenComponent } from './contentchildren.component';

const routes: Routes = [
  {
    path: '',
    component: ContentchildrenComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentchildrenRoutesModule { }
