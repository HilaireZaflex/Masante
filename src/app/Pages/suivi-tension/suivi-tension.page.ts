import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-suivi-tension',
  templateUrl: './suivi-tension.page.html',
  styleUrls: ['./suivi-tension.page.scss'],
})
export class SuiviTensionPage implements OnInit {
  rangeVal: string;

  constructor(public platform: Platform) { 
    this.platform.ready().then(()=>{
      this.rangeVal = "50";
    })
  }

  ngOnInit() {
  }

}
