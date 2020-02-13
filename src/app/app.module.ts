import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DetailFilmPageModule} from './detail-film/detail-film.module';
import { GererProfilPageModule } from './gerer-profil/gerer-profil.module';

export const firebaseConfig = {
  apiKey: "AIzaSyD2IPA3fslrGdm9NN9cf7neX7XAuQ4C2HQ",
  authDomain: "duckflix-8d0d1.firebaseapp.com",
  databaseURL: "https://duckflix-8d0d1.firebaseio.com",
  projectId: "duckflix-8d0d1",
  storageBucket: "duckflix-8d0d1.appspot.com",
  messagingSenderId: "165639634186",
  appId: "1:165639634186:web:3a20c998fa1bcd2a9f4ef3"

};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    DetailFilmPageModule, 
    GererProfilPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
