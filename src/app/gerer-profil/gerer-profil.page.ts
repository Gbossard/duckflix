import { Component, OnInit } from '@angular/core';

import {ModalController} from '@ionic/angular';


@Component({
  selector: 'app-gerer-profil',
  templateUrl: './gerer-profil.page.html',
  styleUrls: ['./gerer-profil.page.scss'],
})
export class GererProfilPage implements OnInit {

  constructor(
    public modalController : ModalController
  ) { }

  fermerModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
