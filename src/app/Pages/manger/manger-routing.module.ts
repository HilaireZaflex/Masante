import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MangerPage } from './manger.page';

const routes: Routes = [
  {
    path: '',
    component: MangerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangerPageRoutingModule {}
