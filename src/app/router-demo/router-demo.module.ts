import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterDemoComponent } from './router-demo.component';
import { RouterDemoRoutesModule } from './router-demo.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterDemoRoutesModule
  ],
  declarations: [RouterDemoComponent]
})
export class RouterDemoModule { }
