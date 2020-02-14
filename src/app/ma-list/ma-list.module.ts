import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaListPageRoutingModule } from './ma-list-routing.module';

import { MaListPage } from './ma-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaListPageRoutingModule
  ],
  declarations: [MaListPage]
})
export class MaListPageModule {}
