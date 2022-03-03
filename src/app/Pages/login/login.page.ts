import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: string = '';
  user = new User();
  exist : any;
  type : any;
  constructor(
       private _service: UserService,
       private _router: Router,
       private formBuilder: FormBuilder
       ) { }

  ngOnInit(): void  {
    this.validations_form = this.formBuilder.group({
      telephone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]{8}$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  validation_messages = {
    'telephone': [
      { type: 'required', message: 'le numéro est obligatoire.'},
      { type: 'pattern', message: 'Veuillez entrer un numéro valide.'}
    ],
    'password': [
      { type: 'required', message: 'le mot de passe est obligatoire.' },
      { type: 'minlength', message: 'le mot de passe doit contenir au moins 5 caractères.' }
    ]
  };





 loginUser(data: any){
  console.log("this user=====",data.value);
 
   this._service.loginUserFromRemote(data.value.mobile, data.value.motDePasse).subscribe(
     data => {
       console.log(data);
       this.type=data;
       this.exist=data;
       if(!data){
         return "n'exixte pas dans la base"
       }else if (data.Type=="MEDECIN")
        this._router.navigate(['/dashboard'])
       else if (data.Type=="UTILISATEUR"){
         localStorage.setItem('user', JSON.stringify(data));
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
