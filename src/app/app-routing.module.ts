import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path:'',
    redirectTo: 'connexion',
    pathMatch:'full'
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'detail-film',
    loadChildren: () => import('./detail-film/detail-film.module').then( m => m.DetailFilmPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'gerer-profil',
    loadChildren: () => import('./gerer-profil/gerer-profil.module').then( m => m.GererProfilPageModule)
  },
  {
    path: 'parametres',
    loadChildren: () => import('./parametres/parametres.module').then( m => m.ParametresPageModule)
  },
  {
    path: 'comptes',
    loadChildren: () => import('./comptes/comptes.module').then( m => m.ComptesPageModule)
  },
  {
    path: 'aide',
    loadChildren: () => import('./aide/aide.module').then( m => m.AidePageModule)
  },
  {
    path: 'ma-list',
    loadChildren: () => import('./ma-list/ma-list.module').then( m => m.MaListPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'ajout-profil',
    loadChildren: () => import('./ajout-profil/ajout-profil.module').then( m => m.AjoutProfilPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
