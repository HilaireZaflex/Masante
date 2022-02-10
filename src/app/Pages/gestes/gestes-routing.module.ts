import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestesPage } from './gestes.page';

const routes: Routes = [
  {
    path: '',
    component: GestesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestesPageRoutingModule {}
