import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { Donnee } from 'src/app/model/donnee';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-suivi-diabete',
  templateUrl: './suivi-diabete.page.html',
  styleUrls: ['./suivi-diabete.page.scss'],
})
export class SuiviDiabetePage implements OnInit {
  rangeVal: string;
  rangeValu:string;

  donnee = new Donnee()
    valeurA:any;
    valeurC:any;
    unite:any;
    diabete:any;
    user:any;

  constructor(
    public platform: Platform,
    private service: UserService,   
    private router: Router,
    private navCrr : NavController
    ) { 
    this.platform.ready().then(()=>{
      this.rangeVal = "50";
    })
    this.platform.ready().then(()=>{
      this.rangeValu = "0.7"
    })

    this.user = localStorage.getItem('user');
    console.log("salut mali",this.user)
  }

  ngOnInit() {}
  async calculD(forms:NgForm){


    this.valeurA=forms.value['valeurA'];
    this.valeurC=forms.value['valeurC'];
    this.unite=forms.value['unite'];
    

    this.donnee.valeurA=this.valeurA;
    this.donnee.valeurC=this.valeurC;
    this.donnee.unite=this.unite;
    this.donnee.utilisateur=JSON.parse(this.user);

    this.service.calculDiabete(this.donnee).subscribe((data:any)=>{
      this.diabete=data;
      // console.log("votre resuta"+ data)
      this.router.navigate(['tabs'])
    })
    
   }

}
