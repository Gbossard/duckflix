import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaListPage } from './ma-list.page';

const routes: Routes = [
  {
    path: '',
    component: MaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaListPageRoutingModule {}
