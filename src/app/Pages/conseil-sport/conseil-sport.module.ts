import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConseilSportPageRoutingModule } from './conseil-sport-routing.module';

import { ConseilSportPage } from './conseil-sport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConseilSportPageRoutingModule
  ],
  declarations: [ConseilSportPage]
})
export class ConseilSportPageModule {}
