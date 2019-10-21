import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: 'src/app/auth/auth.module#AuthModule'
  },
  {
    path: 'pages',
    loadChildren: 'src/app/pages/pages.module#PagesModule', canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'pages/', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
