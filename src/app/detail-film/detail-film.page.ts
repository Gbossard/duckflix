import { Component, OnInit } from '@angular/core';

import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.page.html',
  styleUrls: ['./detail-film.page.scss'],
})
export class DetailFilmPage implements OnInit {

  constructor(
    public modalController : ModalController
  ) { }

  fermerModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
