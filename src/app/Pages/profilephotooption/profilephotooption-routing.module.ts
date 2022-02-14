import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilephotooptionPage } from './profilephotooption.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilephotooptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilephotooptionPageRoutingModule {}
