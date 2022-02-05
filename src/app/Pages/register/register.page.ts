import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private route: Router) { }
  custom = {
    centeredSlides: false,
    slidesPerView: 4.5,
  }

  ngOnInit() {
  }
  login(){
    console.log('button cliquez')
    this.route.navigate(['login'])
  }
  register(){
    console.log('button cliquez')
    this.route.navigate(['register'])
  }
}
