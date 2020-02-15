import { Component, OnInit } from '@angular/core';

import {ModalController} from '@ionic/angular';

import {AjoutProfilPage} from '../ajout-profil/ajout-profil.page';


@Component({
  selector: 'app-gerer-profil',
  templateUrl: './gerer-profil.page.html',
  styleUrls: ['./gerer-profil.page.scss'],
})
export class GererProfilPage implements OnInit {

  constructor(
    public modalController : ModalController
  ) { }

  async openAjoutProfil() {
    const modal = await this.modalController.create({
      component: AjoutProfilPage
    });
    return await modal.present();
  }

  fermerModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
