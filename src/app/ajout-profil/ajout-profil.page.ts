import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';


@Component({
  selector: 'app-ajout-profil',
  templateUrl: './ajout-profil.page.html',
  styleUrls: ['./ajout-profil.page.scss'],
})
export class AjoutProfilPage implements OnInit {

  constructor(
    public modalController : ModalController
  ) { }

  ngOnInit() {
  }

  fermerModal() {
    this.modalController.dismiss();
  }

}
