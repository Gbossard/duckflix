import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public modalController : ModalController) {}
  
  fermerModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
