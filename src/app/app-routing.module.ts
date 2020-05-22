import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule)
  },

  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
