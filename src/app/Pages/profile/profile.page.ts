import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public users: User[];
  InfoUser: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.InfoUser=JSON.parse(localStorage.getItem('user'));
    console.log(this.InfoUser)
  }

}
