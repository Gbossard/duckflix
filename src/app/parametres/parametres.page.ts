import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';


@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.page.html',
  styleUrls: ['./parametres.page.scss'],
})
export class ParametresPage implements OnInit {

  constructor(
    public modalController : ModalController
  ) { }

  fermerModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
