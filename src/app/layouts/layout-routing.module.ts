import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../core/modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../core/modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    ]
  }

];

@NgModule({
  declarations: [LayoutPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [LayoutPageComponent]
})
export class LayoutRoutingModule { }
