import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-docteur',
  templateUrl: './docteur.page.html',
  styleUrls: ['./docteur.page.scss'],
})
export class DocteurPage implements OnInit {
  InfoUser: any;
  medecinContact: any;
  userContact: any;
  id: any;

  constructor(
    private service : UserService,
    private alertCtrl : AlertController,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
           // utilisateur connecter
           this.InfoUser=JSON.parse(localStorage.getItem('user'));
           // list by user
           this.service.getContactByUser(this.InfoUser.id).subscribe((data:any)=>{
             this.userContact = JSON.parse(data);
           })
           // list by medecin
           this.service.getContactByMedecin(this.InfoUser.id).subscribe((data:any)=>{
             this.medecinContact = JSON.parse(data);
           })
  }

suprime(id:any){
  this.service.deleteContact(id).subscribe((data:any)=>{
    console.log("suprimerContact",id);    
  })
}

  // Alert 
  async showAlert(id :any){
    
    await this.alertCtrl.create({
      header: "Voullez vous suprimer ?",           
      buttons:[
        {text:"Oui", handler:(res)=>{
          this.suprime(id);
          this.ngOnInit(); 
        }
      },
      {
        text:"Non"
      }
      ]

    }).then(res=> res.present());
    
  }


}
