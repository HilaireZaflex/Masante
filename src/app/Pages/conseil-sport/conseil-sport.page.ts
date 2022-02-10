import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conseil-sport',
  templateUrl: './conseil-sport.page.html',
  styleUrls: ['./conseil-sport.page.scss'],
})
export class ConseilSportPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 500,
    loop: true,
    autoplay: {
          delay: 3000,
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
