import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GererProfilPageRoutingModule } from './gerer-profil-routing.module';

import { GererProfilPage } from './gerer-profil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GererProfilPageRoutingModule
  ],
  declarations: [GererProfilPage]
})
export class GererProfilPageModule {}
