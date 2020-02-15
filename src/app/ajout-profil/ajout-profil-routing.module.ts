import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutProfilPage } from './ajout-profil.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutProfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutProfilPageRoutingModule {}
