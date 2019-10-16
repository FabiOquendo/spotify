import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'pages',
    loadChildren: 'src/app/pages/pages.module#PagesModule', 
  },
  { path: '', pathMatch: 'full', redirectTo: 'pages'},
  { path: '**', pathMatch: 'full', redirectTo: 'pages'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
