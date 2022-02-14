import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profilephotooption',
  templateUrl: './profilephotooption.page.html',
  styleUrls: ['./profilephotooption.page.scss'],
})
export class ProfilephotooptionPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss(null, 'backdrop');
  }
  startCapture(type) {
    this.modalController.dismiss(type, 'select');
  }

}
