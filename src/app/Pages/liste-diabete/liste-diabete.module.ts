import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeDiabetePageRoutingModule } from './liste-diabete-routing.module';

import { ListeDiabetePage } from './liste-diabete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeDiabetePageRoutingModule
  ],
  declarations: [ListeDiabetePage]
})
export class ListeDiabetePageModule {}
