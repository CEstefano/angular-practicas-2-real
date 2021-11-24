import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app.routing.module';

// Puedo usar directamente el ROUTER MODULE xq angular entiende q esta en memoria cargado x el APPROUTINGMODULE ,sin necesidad de exportare ste ultimo
// import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [SidebarComponent],
  imports: [
    CommonModule ,AppRoutingModule,
  ]
})
export class SharedModule { }
