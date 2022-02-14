import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangerPageRoutingModule } from './manger-routing.module';

import { MangerPage } from './manger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangerPageRoutingModule
  ],
  declarations: [MangerPage]
})
export class MangerPageModule {}
