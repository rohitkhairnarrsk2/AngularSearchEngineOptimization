import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardPageComponent } from './dash-board-page/dash-board-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashBoardPageComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardRoutingModule { }
