import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  //user = new User();
  exist : any;

  constructor(private _service: UserService,   private _router: Router) { }
  custom = {
    centeredSlides: false,
    slidesPerView: 4.5,
  }

  ngOnInit(): void {}

  registerUser(data: any){
    console.log("this user=====",data.value);
     let valeur=JSON.stringify(data.value);
     let b= JSON.parse(valeur)
     this._service.registerUserFromRemote(b).subscribe(res =>{
       console.log(res);
       
     })
   }

}
