import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'docteur',
        loadChildren: () => import('../../Pages/docteur/docteur.module').then( m => m.DocteurPageModule)
      },
  
      {
        path: 'accueil',
        loadChildren: () => import('../../Pages/accueil/accueil.module').then( m => m.AccueilPageModule)
      },
  
      {
        path: 'rappel',
        loadChildren: () => import('../../Pages/rappel/rappel.module').then( m => m.RappelPageModule)
      },
      {
        path: 'conseil-sante',
        loadChildren: () => import('../../Pages/conseil-sante/conseil-sante.module').then( m => m.ConseilSantePageModule)
      },
      {
        path: 'conseil-sport',
        loadChildren: () => import('../../Pages/conseil-sport/conseil-sport.module').then( m => m.ConseilSportPageModule)
      },
      {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
      }
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
