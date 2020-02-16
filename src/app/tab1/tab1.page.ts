import {Component} from '@angular/core';

import {ModalController} from '@ionic/angular';
import {DetailFilmPage} from '../detail-film/detail-film.page';
import {AngularFireDatabase} from '@angular/fire/database';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    public movies: any;
    public moviesList: any;
    public user: any;

    constructor(public modalController: ModalController, public afDB: AngularFireDatabase, public activatedRoute: ActivatedRoute) {
        this.activatedRoute.queryParams.subscribe((res) => {
            this.user = res;
        });
        this.afDB.list('/Movies').valueChanges().subscribe((data) => {
            var movs = [];
            var movList = [];
            var usr = this.user;
            data.forEach(function (movie) {
                if (usr.list.indexOf(movie.id) !== -1) {
                    movList.push(movie);
                } else {
                    movs.push(movie);
                }
            });
            this.movies = movs;
            this.moviesList = movList;
        });
    }

    add() {
        this.afDB.list('Movies/').push({
            title: 'Batman',
            image: 'batman.jpg'
        });
    }

    async openDetailFilm() {
        const modal = await this.modalController.create({
            component: DetailFilmPage
        });
        return await modal.present();
    }

}
