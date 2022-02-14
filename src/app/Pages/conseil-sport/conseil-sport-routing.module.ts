import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConseilSportPage } from './conseil-sport.page';

const routes: Routes = [
  {
    path: '',
    component: ConseilSportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConseilSportPageRoutingModule {}
