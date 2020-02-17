import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ModalController} from '@ionic/angular';
import {ActivatedRoute} from "@angular/router";
import {AngularFireDatabase} from "@angular/fire/database";

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.page.html',
  styleUrls: ['./detail-film.page.scss'],
})
export class DetailFilmPage implements OnInit {
  public movie: any;
  public user : any;
  public isInList : false;
  constructor(
    public modalController : ModalController,
    public router : Router,
    public activatedRoute : ActivatedRoute,
    public afDB : AngularFireDatabase,
  ) {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.movie = res.movie;
      this.user = res.user;
    });
    this.afDB.list('/Movies').valueChanges().subscribe((data) => {
      var mov ;
      var movId = this.movie;
      data.forEach(function (movie) {
        if (movId === movie.id) {
          mov = movie;
        }
      });
      this.movie = mov;
    });
    this.afDB.list('/Users').valueChanges().subscribe((data) => {
      var us ;
      var userId = this.user;
      var isInList = false;
      var movie = this.movie;
      data.forEach(function(user) {
        if (userId === user.name) {
          us = user;
        }
      });
      us.list.forEach(function (movieId) {
        if (movieId.toString() === movie.id.toString()) {
          isInList = true;
        }
      });
      this.isInList = isInList;
      this.user = us;
    });

  }

  fermerModal() {
    this.router.navigate(['tab1'], {
      queryParams: this.user
    });
  }


  ngOnInit() {
  }

}
