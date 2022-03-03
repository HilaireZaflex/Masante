import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  //user = new User();
  exist : any;

  validation_messages = {

    'name': [
      { type: 'required', message: 'le nom est obligatoire.' },
      { type: 'pattern', message: 'Entrez un nom valide.' }
    ],
    'email': [
      { type: 'required', message: 'Email est obligatoire.' },
      { type: 'pattern', message: 'Entrez un email valide.' }
    ],
    'phone': [
      { type: 'required', message: 'le téléphone est obligatoire.' },
      { type: 'pattern', message: 'Entrez un numéro valide.' }
    ],
    'address': [
      { type: 'required', message: ' votre addresse est obligatoire.' },
      { type: 'pattern', message: 'Entrez une addresse valide.' }
    ],
    'age': [
      { type: 'required', message: 'votre âge est obligatoire.' },
      { type: 'pattern', message: 'Entrez un âge valide.' }
    ],
    'password': [
      { type: 'required', message: 'Password est obligatoire.' },
      { type: 'minlength', message: 'le password doit contenir au moins 5 caractères.' }
    ]
  };

  constructor(private _service: UserService,   private _router: Router, private formBuilder: FormBuilder) { }
  custom = {
    centeredSlides: false,
    slidesPerView: 4.5,
  }

  ngOnInit(): void {
    
    this.validations_form = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      age: [''],
      fonction: [''],
      address: [''],
      password: ['']
    })
    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]{8}$')
      ])),
      address: new FormControl('', Validators.compose([
        Validators.required
      ])),
      age: new FormControl('', Validators.compose([
        Validators.required
      ])),

      fonction: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });

  }

  registerUser(data: any){
    console.log("this user=====",data.value);
     let valeur=JSON.stringify(data.value);
     let b= JSON.parse(valeur)
     this._service.registerUserFromRemote(b).subscribe(res =>{
       console.log(res);
       
     })
   }

}
