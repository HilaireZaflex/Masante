import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/service/user.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  subjects;
  public users: User[];
  InfoUser: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.InfoUser=JSON.parse(localStorage.getItem('user'));
    console.log(this.InfoUser);

    this.subjects = [
      {
        name : 'All'
      },
      {
        img: 'assets/sport.png',
        name: "Sport"
      },
      {
        img: 'assets/sport1.png',
        name: "Sport"
      },
      {
        img: 'assets/sport3.png',
        name: "Sport"
      },
      {
        img: 'assets/sport.png',
        name: "Sport"
      }
    ];
  }

  goToSubject(){

  }

}
