import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BonnePratiquePageRoutingModule } from './bonne-pratique-routing.module';

import { BonnePratiquePage } from './bonne-pratique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BonnePratiquePageRoutingModule
  ],
  declarations: [BonnePratiquePage]
})
export class BonnePratiquePageModule {}
