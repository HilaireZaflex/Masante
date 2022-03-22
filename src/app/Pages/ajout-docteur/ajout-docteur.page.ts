import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Contact } from 'src/app/model/contact';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-ajout-docteur',
  templateUrl: './ajout-docteur.page.html',
  styleUrls: ['./ajout-docteur.page.scss'],
})
export class AjoutDocteurPage implements OnInit {

  contact = new Contact();

    medecin: any;
    id:any;
    medeciMobile:any;
    utilisateur:any;
    InfoUser: any;
    mobile: any;
    newContact: any;

    filterTerm: string;
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

  async ajoutContact(forms:NgForm){
    this.mobile=forms.value['mobile'];
    console.log("saisie",this.mobile);
    // ====================
        for(let i of this.medecin){
         i.mobile;
         if(i.mobile == this.mobile){
           this.medeciMobile = {
            Type:i.Type,
            id: i.id
           }
         }else{
           console.log("pas dans notre base");
           
         }
        }
    // ====================
    this.utilisateur ={
      Type:this.InfoUser.Type,
      id: this.InfoUser.id
    } 
    
    // ====================
    this.contact.mobile = this.mobile;
    this.contact.utilisateur=this.utilisateur;
    this.contact.medecin=this.medeciMobile;
  
    this.service.ajoutContact(this.contact).subscribe((data:any)=>{
      this.newContact = data;
      console.log("New conctact", this.newContact);
      
      this.navCrr.navigateForward(['docteur']);
    })
  }
}
