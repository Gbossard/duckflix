import { Component } from '@angular/core';

import {ModalController} from '@ionic/angular';
import {DetailFilmPage} from '../detail-film/detail-film.page';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public movies : any;
  constructor(public modalController : ModalController, public afDB: AngularFireDatabase,) {
    this.afDB.list('/Movies').valueChanges().subscribe((data)=> {
      this.movies = data;
    });
  }
  add() {
    this.afDB.list('Movies/').push({
      title: 'Coco',
      image : 'http://fr.web.img3.acsta.net/c_215_290/pictures/17/09/15/12/42/0056825.jpg'
    });
  }

  async openDetailFilm() {
    const modal = await this.modalController.create({
      component: DetailFilmPage
    });
    return await modal.present();
  }

}
