import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CliniquePageRoutingModule } from './clinique-routing.module';

import { CliniquePage } from './clinique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CliniquePageRoutingModule
  ],
  declarations: [CliniquePage]
})
export class CliniquePageModule {}
