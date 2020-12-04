import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HighlightComponent } from './components/movie/highlight/highlight.component';

const routes: Routes = [
  //{path: 'home', component: HighlightComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
