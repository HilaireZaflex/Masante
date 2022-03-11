import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  public users: User[];
  InfoUser: any;
  dernierDonneee : any;
  userData :any;
  userInfo :any;
  mali: any;
  //====================
  maladies : any;
  resultat : any;

  //====================
  constructor(private userService: UserService) { }

  ngOnInit() {
    
    this.InfoUser=JSON.parse(localStorage.getItem('user'));
    // console.log(this.InfoUser);

    this.userService.resultat().subscribe((data:any)=>{
      this.dernierDonneee = data;

      // console.log(data);
    })

    this.userInfo = this.InfoUser;
    console.log("AAAAAAAAAA",this.userInfo)
    this.userService.userData(this.userInfo.id).subscribe((data:any)=>{
      this.userData = JSON.parse(data);
      this.maladies = this.userData.maladies;
      this.resultat = this.userData.resultat;
    console.log("BBBBBBBBBBBB",this.userData.resultat)

    })
  }
  
  


}
