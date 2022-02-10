import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manger',
  templateUrl: './manger.page.html',
  styleUrls: ['./manger.page.scss'],
})
export class MangerPage implements OnInit {
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
