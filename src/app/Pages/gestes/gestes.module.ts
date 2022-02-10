import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestesPageRoutingModule } from './gestes-routing.module';

import { GestesPage } from './gestes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestesPageRoutingModule
  ],
  declarations: [GestesPage]
})
export class GestesPageModule {}
