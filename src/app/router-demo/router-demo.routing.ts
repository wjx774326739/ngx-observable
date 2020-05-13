import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

import { RouterDemoComponent } from './router-demo.component';

const routes: Routes = [
  {
    path: '',
    component: RouterDemoComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RouterDemoRoutesModule { }
