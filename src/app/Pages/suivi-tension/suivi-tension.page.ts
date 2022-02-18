import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Donnee } from 'src/app/model/donnee';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-suivi-tension',
  templateUrl: './suivi-tension.page.html',
  styleUrls: ['./suivi-tension.page.scss'],
})
export class SuiviTensionPage implements OnInit {
  rangeVal: string;
  rangeValu:string;

  donnee = new Donnee()
  valeurA:any;
  valeurB:any;
  tension:any;

  constructor(
    public platform: Platform,
    private service: UserService,   
    private router: Router
    ) { 
    this.platform.ready().then(()=>{
      this.rangeVal = "110";
    })
    this.platform.ready().then(()=>{
      this.rangeValu ="70";
    })
  }

  ngOnInit() {}

  async calculT(forms:NgForm){

    this.valeurA=forms.value['valeurA'];
    this.valeurB=forms.value['valeurB'];
    
    

    this.donnee.valeurA=this.valeurA;
    this.donnee.valeurB=this.valeurB;
   
    this.service.calculTension(this.donnee).subscribe((data:any)=>{
      this.tension=data;
      console.log("votre resuta"+ data)
      this.router.navigate(['accueil'])
    })
    
   }

}
