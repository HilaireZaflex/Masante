import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public pages: any[] = [
    {title: 'Accueil', url: '/tabs', icon: 'home',image:'../assets/iconImage/home.png'},
    {title: 'Données', url: '/dd', icon: 'person', image:'../assets/iconImage/database.png'},
    {title: 'Conseils', url: '/conseil-sante', icon: 'information-circle',image:'../assets/iconImage/pharmacy.png'},
    {title: 'Medecins', url: '/docteur', icon: 'person', image:'../assets/iconImage/doctor.png'},
    {title: 'A propos', url: '/dd', icon: 'person', image:'../assets/iconImage/about.png'},
    {title: 'Déconnexion', url: '', icon: 'log-out', image:'../assets/iconImage/logout.png', route: true},
  ];
  InfoUser :any;
  constructor(
    private router : Router
  ) {}

  ngOnInit() {
    
    this.InfoUser=JSON.parse(localStorage.getItem('user'));
    }

  signOut() {
    localStorage.removeItem('user');
    window.location.href="/";
    history.forward();
  }
}
