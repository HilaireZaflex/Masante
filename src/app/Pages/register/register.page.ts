import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }
  custom = {
    centeredSlides: false,
    slidesPerView: 4.5,
  }

  ngOnInit() {
  }

}
