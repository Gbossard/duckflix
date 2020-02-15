import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {AngularFireDatabase} from "@angular/fire/database";
import {Router} from "@angular/router";
import {Tab1Page} from "../tab1/tab1.page";

import {GererProfilPage} from '../gerer-profil/gerer-profil.page';
import {AjoutProfilPage} from '../ajout-profil/ajout-profil.page';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage{
  public users : any;
  constructor(public modalController : ModalController, public afDB: AngularFireDatabase, public router: Router) {
    this.afDB.list('/Users').valueChanges().subscribe((data)=> {
      this.users = data;
    });
  }

  connect(user) {
    console.log(user);
    this.router.navigate(['tab1'], {
      queryParams: user
    })
  }

  async openGererProfil() {
    const modal = await this.modalController.create({
      component: GererProfilPage
    });
    return await modal.present();
  }

  async openAjoutProfil() {
    const modal = await this.modalController.create({
      component: AjoutProfilPage
    });
    return await modal.present();
  }

}
