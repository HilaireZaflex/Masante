import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeDiabetePage } from './liste-diabete.page';

const routes: Routes = [
  {
    path: '',
    component: ListeDiabetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeDiabetePageRoutingModule {}
