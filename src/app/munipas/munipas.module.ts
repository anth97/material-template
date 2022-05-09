import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';

import { ListComponent } from './pages/user/list/list.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesRoutingModule } from './munipas.routing';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PagesRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class PagesModule { }
