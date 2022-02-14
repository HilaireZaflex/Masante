import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeTensionPageRoutingModule } from './liste-tension-routing.module';

import { ListeTensionPage } from './liste-tension.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeTensionPageRoutingModule
  ],
  declarations: [ListeTensionPage]
})
export class ListeTensionPageModule {}
