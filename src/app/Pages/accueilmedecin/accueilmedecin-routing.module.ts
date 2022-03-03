import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilmedecinPage } from './accueilmedecin.page';

const routes: Routes = [
  {
    path: '',
    component: AccueilmedecinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccueilmedecinPageRoutingModule {}
