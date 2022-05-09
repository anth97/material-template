import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages.routing';
import { ListComponent } from './user/list/list.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PagesRoutingModule,
    MaterialModule
  ]
})
export class PagesModule { }
