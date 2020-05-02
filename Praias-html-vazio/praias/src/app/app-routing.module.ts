import { LesteilhaComponent } from './lesteilha/lesteilha.component';
import { PainelComponent } from './painel/painel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SulilhaComponent } from './sulilha/sulilha.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'norte', component:PainelComponent},
  {path:'sul', component:SulilhaComponent},
  {path:'leste', component:LesteilhaComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
