import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {GererProfilPage} from '../gerer-profil/gerer-profil.page';
import {AjoutProfilPage} from '../ajout-profil/ajout-profil.page';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  constructor(
    public modalController : ModalController
  ) { }

  ngOnInit() {
  }

  async openGererProfil() {
    const modal = await this.modalController.create({
      component: GererProfilPage
    });
    return await modal.present();
  }

  async openAjoutProfil() {
    const modal = await this.modalController.create({
      component: AjoutProfilPage
    });
    return await modal.present();
  }

}
