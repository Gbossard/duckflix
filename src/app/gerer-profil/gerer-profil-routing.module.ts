import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GererProfilPage } from './gerer-profil.page';

const routes: Routes = [
  {
    path: '',
    component: GererProfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GererProfilPageRoutingModule {}
