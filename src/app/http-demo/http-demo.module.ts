import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpDemoComponent } from './http-demo.component';
import { HttpDemoRoutesModule } from './http-demo.routing';

@NgModule({
  imports: [
    CommonModule,
    HttpDemoRoutesModule
  ],
  declarations: [HttpDemoComponent]
})
export class HttpDemoModule { }
