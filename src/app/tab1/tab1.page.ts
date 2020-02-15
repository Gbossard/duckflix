import { Component } from '@angular/core';

import {ModalController} from '@ionic/angular';
import {DetailFilmPage} from '../detail-film/detail-film.page';
import { AngularFireDatabase } from '@angular/fire/database';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public movies : any;
  public user : any;
  constructor(public modalController : ModalController, public afDB: AngularFireDatabase, public activatedRoute : ActivatedRoute) {
    this.afDB.list('/Movies').valueChanges().subscribe((data)=> {
      this.movies = data;
    });
    this.activatedRoute.queryParams.subscribe((res)=>{
      this.user = res;
      console.log(this.user);
    });
  }
  add() {
    this.afDB.list('Movies/').push({
      name : 'Oriane',
      image: 'user3.jpg'
    });
  }

  async openDetailFilm() {
    const modal = await this.modalController.create({
      component: DetailFilmPage
    });
    return await modal.present();
  }

}
