import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public pages: any[] = [
    {title: 'Accueil', url: '/accueil', icon: 'home'},
    {title: 'Docteur', url: '/docteur', icon: 'document-lock'},
    {title: 'Conseil', url: '/conseil-sante', icon: 'information-circle'},
    {title: 'Profile', url: '/profile', icon: 'person'},
    {title: 'Se déconnecter', url: '', icon: 'log-out', route: true},
  ];
  app: any;
  constructor(
    public router : Router,
    public menu : MenuController,
  ) {}


  signOut() {
    localStorage.clear();
    this.router.navigateByUrl('/');

  }
}

