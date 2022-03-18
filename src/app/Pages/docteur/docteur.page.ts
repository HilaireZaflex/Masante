import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docteur',
  templateUrl: './docteur.page.html',
  styleUrls: ['./docteur.page.scss'],
})
export class DocteurPage implements OnInit {
  InfoUser: any;

  constructor() { }

  ngOnInit() {
           // utilisateur connecter
           this.InfoUser=JSON.parse(localStorage.getItem('user'));
  }

}
