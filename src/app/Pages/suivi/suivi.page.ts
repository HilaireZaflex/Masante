import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Donnee } from 'src/app/model/donnee';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.page.html',
  styleUrls: ['./suivi.page.scss'],
})
export class SuiviPage implements OnInit {
    donnee = new Donnee()
    valeurA:any;
    valeurB:any;
    valeurC:any;
    unite:any;
    malad:any;
    resultat:any;
    calcul:any;

  constructor(
    private service: UserService,   
    private router: Router,
    private navCrr : NavController
  ) { }
  

  ngOnInit():void {}

  async Calcul(forms:NgForm){

    this.valeurA=forms.value['valeurA'];
    this.valeurB=forms.value['valeurB'];
    this.valeurC=forms.value['valeurC'];
    this.unite=forms.value['unite'];
    this.malad=forms.value['malad'];
    this.resultat=forms.value['resultat'];

    this.donnee.valeurA=this.valeurA;
    this.donnee.valeurB=this.valeurB;
    this.donnee.valeurC=this.valeurC;
    this.donnee.unite=this.unite;
    this.donnee.malad=this.malad;
    this.donnee.resultat=this.resultat;
   
    this.service.calculDonnee(this.donnee).subscribe((data:any)=>{
      this.calcul=data;
      console.log("votre resuta"+ data)
      this.router.navigate(['accuiel'])
    })
    
   }


}
