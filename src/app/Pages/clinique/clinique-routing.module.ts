import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CliniquePage } from './clinique.page';

const routes: Routes = [
  {
    path: '',
    component: CliniquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CliniquePageRoutingModule {}
