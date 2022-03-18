import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutPatientPageRoutingModule } from './ajout-patient-routing.module';

import { AjoutPatientPage } from './ajout-patient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutPatientPageRoutingModule
  ],
  declarations: [AjoutPatientPage]
})
export class AjoutPatientPageModule {}
