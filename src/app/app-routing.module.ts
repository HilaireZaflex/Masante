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
    loadChildren: () => import('./Pages/suivi/suivi.module').then( m => m.SuiviPageModule)
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
