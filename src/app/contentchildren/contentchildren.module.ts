import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContentchildrenComponent } from './contentchildren.component';
import { ContentchildrenRoutesModule } from './contentchildren.routing';

@NgModule({
  imports: [
    CommonModule,
    ContentchildrenRoutesModule
  ],
  declarations: [ContentchildrenComponent]
})
export class ContentchildrenModule { }
