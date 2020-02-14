import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.page.html',
  styleUrls: ['./comptes.page.scss'],
})
export class ComptesPage implements OnInit {

  constructor( 
    public modalController : ModalController
  ) { }

  fermerModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
