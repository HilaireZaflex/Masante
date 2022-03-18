import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-ajout-docteur',
  templateUrl: './ajout-docteur.page.html',
  styleUrls: ['./ajout-docteur.page.scss'],
})
export class AjoutDocteurPage implements OnInit {
  medecin: any;
    id:any;
    etat:any;
    medeci:any;
    medeciMobile:any;
    utilisateur:any;
  InfoUser: any;
contact : any;
  donnee: any;
  data: any;
  constructor(
    private service : UserService,
    private navCrr : NavController,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    this.InfoUser=JSON.parse(localStorage.getItem('user'));

    this.service.getAllMedecin().subscribe((data:any)=>{
      this.medecin = data;
      console.log("medecin",this.medecin);
      
      
    })
  }

  async SaveData(forms:NgForm){

    this.utilisateur = this.InfoUser;
    this.medeci=forms.value['mobile'];
    this.etat = 'ACTIVE'
    if(forms.value['mobile'] !== this.medecin.mobile){
      console.log('Erorr')
    }else{
      this.medeci= this.medecin;
    }

    this.contact.etat=this.etat;
    this.contact.utilisateur=this.utilisateur;
    this.contact.medecin.id=this.medeci;
    this.service.ajoutContact(this.contact).subscribe((data:any)=>{
      this.donnee=data;
      console.log("salut"+ data)
      // this.router.navigate(['login'])
      this.navCrr.navigateForward(['docteur']);
    })

  
}
  update(){
    this.service.modifierProfil(this.id, this.data).subscribe((data:any)=>{
      // this.router.navigate(['liste-maladie']);
    })

  }
}
