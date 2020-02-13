import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {GererProfilPage} from '../gerer-profil/gerer-profil.page';
import {ParametresPage} from '../parametres/parametres.page';
import {ComptesPage} from '../comptes/comptes.page';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor(
    public modalController : ModalController
  ) {}

  async openGererProfil() {
    const modal = await this.modalController.create({
      component: GererProfilPage
    });
    return await modal.present();
  }

  async openParametres() {
    const modal = await this.modalController.create({
      component: ParametresPage
    });
    return await modal.present();
  }

  async openComptes() {
    const modal = await this.modalController.create({
      component: ComptesPage
    });
    return await modal.present();
  }

}
