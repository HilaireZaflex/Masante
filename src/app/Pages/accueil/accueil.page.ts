import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/user';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  public users: User[];
  InfoUser: any;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    
    this.InfoUser=JSON.parse(localStorage.getItem('user'));
    console.log(this.InfoUser)
  }
  
  


}
