import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./Pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Pages/register/register.module').then( m => m.RegisterPageModule)
  },

  {
    path: 'suivi',
    loadChildren: () => import('./Pages/suivi/suivi.module').then( m => m.SuiviPageModule )
  },
 
  {
    path: 'accueil',
    loadChildren: () => import('./Pages/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'suivi-tension',
    loadChildren: () => import('./Pages/suivi-tension/suivi-tension.module').then( m => m.SuiviTensionPageModule)
  },
  {
    path: 'suivi-diabete',
    loadChildren: () => import('./Pages/suivi-diabete/suivi-diabete.module').then( m => m.SuiviDiabetePageModule)
  },
  {
    path: 'docteur',
    loadChildren: () => import('./Pages/docteur/docteur.module').then( m => m.DocteurPageModule)
  },
  {
    path: 'rappel',
    loadChildren: () => import('./Pages/rappel/rappel.module').then( m => m.RappelPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./Pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'conseil-sante',
    loadChildren: () => import('./Pages/conseil-sante/conseil-sante.module').then( m => m.ConseilSantePageModule)
  },
  {
    path: 'conseil-sport',
    loadChildren: () => import('./Pages/conseil-sport/conseil-sport.module').then( m => m.ConseilSportPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./Pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'pharmacie',
    loadChildren: () => import('./Pages/pharmacie/pharmacie.module').then( m => m.PharmaciePageModule)
  },
  {
    path: 'manger',
    loadChildren: () => import('./Pages/manger/manger.module').then( m => m.MangerPageModule)
  },
  {
    path: 'bonne-pratique',
    loadChildren: () => import('./Pages/bonne-pratique/bonne-pratique.module').then( m => m.BonnePratiquePageModule)
  },
  {
    path: 'clinique',
    loadChildren: () => import('./Pages/clinique/clinique.module').then( m => m.CliniquePageModule)
  },
  {
    path: 'gestes',
    loadChildren: () => import('./Pages/gestes/gestes.module').then( m => m.GestesPageModule)
  },
  {
    path: 'profilephotooption',
    loadChildren: () => import('./Pages/profilephotooption/profilephotooption.module').then( m => m.ProfilephotooptionPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./Pages/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./Pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'liste-diabete',
    loadChildren: () => import('./Pages/liste-diabete/liste-diabete.module').then( m => m.ListeDiabetePageModule)
  },
  {
    path: 'liste-tension',
    loadChildren: () => import('./Pages/liste-tension/liste-tension.module').then( m => m.ListeTensionPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./Pages/menu/menu.module').then( m => m.MenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
