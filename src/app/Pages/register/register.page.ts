import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/user';

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
     this._service.registerUserFromRemote(b).subscribe(
       data => {
         console.log(data);
         this.exist=data;
         
         if(!data){
           return "existe deja dans la base"
         }else{
           console.log("ok");
           
           //this._router.navigate(['/login'])
         }
    
      }
     )
   }




  login(){
    console.log('button cliquez')
    this._router.navigate(['login'])
  }
  register(){
    console.log('button cliquez')
    this._router.navigate(['register'])
  }
}
