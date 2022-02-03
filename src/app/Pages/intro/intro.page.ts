import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private route : Router) { }

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
