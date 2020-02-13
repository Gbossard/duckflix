import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {GererProfilPage} from '../gerer-profil/gerer-profil.page';

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

}
