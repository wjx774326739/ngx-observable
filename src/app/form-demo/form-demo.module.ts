import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormDemoComponent } from './form-demo.component';
import { FormDemoRoutesModule } from './form-demo.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormDemoRoutesModule
  ],
  declarations: [FormDemoComponent]
})
export class FormDemoModule { }
