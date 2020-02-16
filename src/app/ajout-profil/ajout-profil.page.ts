import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import {FormBuilder, FormGroup, FormsModule} from '@angular/forms';
import {Router} from "@angular/router";


@Component({
  selector: 'app-ajout-profil',
  templateUrl: './ajout-profil.page.html',
  styleUrls: ['./ajout-profil.page.scss'],
})
export class AjoutProfilPage implements OnInit {

  public addUserForm: FormGroup;

  constructor(
    public modalController : ModalController,
    public formBuilder:  FormBuilder,
    public afDB : AngularFireDatabase,
    public router: Router
  ) {
    this.addUserForm = formBuilder.group({
      username: ['']
    });
  }

  ngOnInit() {
  }

  fermerModal() {
    this.modalController.dismiss();
  }
  addUser(){
    this.afDB.list('Users/').push({
      name : this.addUserForm.value.username,
      image: 'profil4.png'
    });
    this.router.navigate(['connexion']);
  }

}
