import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-suivi-diabete',
  templateUrl: './suivi-diabete.page.html',
  styleUrls: ['./suivi-diabete.page.scss'],
})
export class SuiviDiabetePage implements OnInit {
  rangeVal: string;

  constructor(public platform: Platform) { 
    this.platform.ready().then(()=>{
      this.rangeVal = "50";
    })
  }

  ngOnInit() {
  }

}
