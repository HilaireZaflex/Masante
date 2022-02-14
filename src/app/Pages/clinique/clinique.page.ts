import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinique',
  templateUrl: './clinique.page.html',
  styleUrls: ['./clinique.page.scss'],
})
export class CliniquePage implements OnInit {
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
