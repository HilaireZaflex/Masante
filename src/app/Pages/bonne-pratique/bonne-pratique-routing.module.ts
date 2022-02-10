import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BonnePratiquePage } from './bonne-pratique.page';

const routes: Routes = [
  {
    path: '',
    component: BonnePratiquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BonnePratiquePageRoutingModule {}
