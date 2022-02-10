import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = new User();
  exist : any;
  constructor(private _service: UserService,   private _router: Router) { }

  ngOnInit(): void  {}

 loginUser(data: any){
  console.log("this user=====",data.value);
 
   this._service.loginUserFromRemote(data.value.mobile, data.value.motDePasse).subscribe(
     data => {
       console.log(data);
       this.exist=data;
       if(!data){
         return "n'exixte pas dans la base"
       }else{
         this._router.navigate(['/suivi'])
       }
  
    }
   )
 }



























//   onLogin(form :NgForm){
//     this.service.login3(form.value["mobile"],form.value["motDePasse"]).subscribe((res)=>{
//       if(res){

//         console.log(res);
//         this.loginInfo = res;
//         this.router.navigate(["/accueil"]);
//         localStorage.setItem('isLogin', JSON.stringify(this.loginInfo));
//       }else{
//         this.service.login2(form.value["mobile"],form.value["motDePasse"]).subscribe((res)=>{
//           if(res){
//             console.log(res);
//             this.loginInfo = res;
//             this.router.navigate(["/suivi"]);
//             localStorage.setItem('isLogin', JSON.stringify(this.loginInfo));
//           }else {
//             this.router.navigate(["/login"])
//             console.log("login non connecter");
          
//         } 
        
//       })
//     }
//   })
// }

}
