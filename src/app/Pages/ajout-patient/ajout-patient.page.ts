import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Contact } from 'src/app/model/contact';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-liste-tension',
  templateUrl: './ajout-patient.page.html',
  styleUrls: ['./ajout-patient.page.scss'],
})
export class AjoutPatientPage implements OnInit {

  contact = new Contact();

  mobile:any;
  etat:any;
  medeci:any;
  userMobile:any;
  userId : any;
  medecinId : any;
  utilisateur:any;
  medecin : any;

  id: any;
  InfoUser: any;
  allUser : any;
  newContact : any;

  filterTerm: string;

  constructor(
    private service :UserService,
    private route : ActivatedRoute,
    private navCrr : NavController
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.InfoUser=JSON.parse(localStorage.getItem('user'));

    this.service.getAllUtilisateur().subscribe((data:any)=>{
      this.allUser = data;      
  })
  


}
async ajoutContact(forms:NgForm){
  this.mobile=forms.value['mobile'];
  // ====================
      for(let i of this.allUser){
       i.mobile;
       if(i.mobile == this.mobile){
         this.userId = {
          Type:i.Type,
          id: i.id
         }
       }else{
         console.log("pas dans notre base");
         
       }
      }
  // ====================
  this.medecinId ={
    Type:this.InfoUser.Type,
    id: this.InfoUser.id
  } 
  
  // ====================
  this.contact.mobile = this.mobile;
  this.contact.utilisateur=this.userId;
  this.contact.medecin=this.medecinId;

  this.service.ajoutContact(this.contact).subscribe((data:any)=>{
    this.newContact = data;
    this.navCrr.navigateForward(['docteur']);
    this.ngOnInit();
  })
}
}
