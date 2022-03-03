import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilmedecinPageRoutingModule } from './accueilmedecin-routing.module';

import { AccueilmedecinPage } from './accueilmedecin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilmedecinPageRoutingModule
  ],
  declarations: [AccueilmedecinPage]
})
export class AccueilmedecinPageModule {}
