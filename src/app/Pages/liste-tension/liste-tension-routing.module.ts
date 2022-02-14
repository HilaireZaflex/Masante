import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeTensionPage } from './liste-tension.page';

const routes: Routes = [
  {
    path: '',
    component: ListeTensionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeTensionPageRoutingModule {}
