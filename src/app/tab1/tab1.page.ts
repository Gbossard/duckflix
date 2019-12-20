import { Component } from '@angular/core';

import {ModalController} from '@ionic/angular';
import {DetailFilmPage} from '../detail-film/detail-film.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public modalController : ModalController
  ) {}

  async openDetailFilm() {
    const modal = await this.modalController.create({
      component: DetailFilmPage
    });
    return await modal.present();
  }

}
