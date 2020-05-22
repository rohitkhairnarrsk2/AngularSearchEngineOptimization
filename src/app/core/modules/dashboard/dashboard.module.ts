import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardPageComponent } from './dash-board-page/dash-board-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [DashBoardPageComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
