import { Component } from '@angular/core';

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
  constructor() {}

  signOut() {
    console.log('signout');
    
  }
}
