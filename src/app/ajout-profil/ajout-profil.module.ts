import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutProfilPageRoutingModule } from './ajout-profil-routing.module';

import { AjoutProfilPage } from './ajout-profil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutProfilPageRoutingModule
  ],
  declarations: [AjoutProfilPage]
})
export class AjoutProfilPageModule {}
