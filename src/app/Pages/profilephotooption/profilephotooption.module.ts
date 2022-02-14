import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilephotooptionPageRoutingModule } from './profilephotooption-routing.module';

import { ProfilephotooptionPage } from './profilephotooption.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilephotooptionPageRoutingModule
  ],
  declarations: [ProfilephotooptionPage]
})
export class ProfilephotooptionPageModule {}
