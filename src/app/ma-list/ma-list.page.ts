import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-ma-list',
  templateUrl: './ma-list.page.html',
  styleUrls: ['./ma-list.page.scss'],
})
export class MaListPage implements OnInit {

  constructor(
    public modalController : ModalController
  ) { }

  fermerModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
