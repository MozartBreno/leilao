import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { LanceCrudComponent } from './views/lance-crud/lance-crud.component';
import { LanceCreateComponent } from './components/lance/lance-create/lance-create.component';
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "leilao",
    component: LanceCrudComponent
  },
  {
    path: "leilao/create",
    component: LanceCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
