import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-aide',
  templateUrl: './aide.page.html',
  styleUrls: ['./aide.page.scss'],
})
export class AidePage implements OnInit {

  constructor(
    public modalController : ModalController
  ) { }

  ngOnInit() {
  }

  fermerModal() {
    this.modalController.dismiss();
  }

}
