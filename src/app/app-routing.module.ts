import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaReadComponent } from './components/categoria/categoria-read/categoria-read.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
    
  },
  {
    path:"categorias",component:CategoriaReadComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
