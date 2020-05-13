import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormDemoComponent } from './form-demo.component';
import { FormDemoRoutesModule } from './form-demo.routing';

@NgModule({
  imports: [
    CommonModule,
    FormDemoRoutesModule
  ],
  declarations: [FormDemoComponent]
})
export class FormDemoModule { }
