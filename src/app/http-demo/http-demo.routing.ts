import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

import { HttpDemoComponent } from './http-demo.component';

const routes: Routes = [
  {
    path: '',
    component: HttpDemoComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpDemoRoutesModule { }
