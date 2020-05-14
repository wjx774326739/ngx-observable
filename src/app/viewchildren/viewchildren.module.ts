import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ViewchildrenComponent } from './viewchildren.component';
import { ViewchildrenRoutesModule } from './viewchildren.routing';

@NgModule({
  imports: [
    CommonModule,
    ViewchildrenRoutesModule
  ],
  declarations: [ViewchildrenComponent]
})
export class ViewchildrenModule { }
