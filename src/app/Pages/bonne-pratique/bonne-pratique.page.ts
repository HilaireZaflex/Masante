import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonne-pratique',
  templateUrl: './bonne-pratique.page.html',
  styleUrls: ['./bonne-pratique.page.scss'],
})
export class BonnePratiquePage implements OnInit {

  constructor() { }

  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay:true,
  }
  
  slideOpts = {
    initialSlide: 1,
    speed: 4000,
    loop: true,
    autoplay: {
          delay: 5000,
    }
  };

  ngOnInit() {
  }

}
