import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor( public alertController: AlertController) { }

  ngOnInit() {
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Bilan de santé',
      cssClass:'my-custom-class',
      subHeader: 'diabète ',
      message: 'Glycémie normale',
      buttons: ['OK']
    });

    await alert.present();
  }

}
