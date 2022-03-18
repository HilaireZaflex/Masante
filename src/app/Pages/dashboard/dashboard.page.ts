import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  InfoUser: any;

  constructor() { }

  ngOnInit() {
    // infomation de l'utilisateur connecte
    this.InfoUser=JSON.parse(localStorage.getItem('user'));
   
  }

}
