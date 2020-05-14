import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

const routes: Routes = [
  {
    path: 'http',
    loadChildren: () => import('./http-demo/http-demo.module').then(m => m.HttpDemoModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form-demo/form-demo.module').then(m => m.FormDemoModule)
  },
  {
    path: 'router',
    loadChildren: () => import('./router-demo/router-demo.module').then(m => m.RouterDemoModule)
  },
  {
    path: 'viewchildren',
    loadChildren: () => import('./viewchildren/viewchildren.module').then(m => m.ViewchildrenModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'http'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
