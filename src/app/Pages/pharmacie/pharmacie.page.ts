import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacie',
  templateUrl: './pharmacie.page.html',
  styleUrls: ['./pharmacie.page.scss'],
})
export class PharmaciePage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 4000,
    loop: true,
    autoplay: {
          delay: 5000,
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
