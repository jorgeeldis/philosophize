import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeditationsPage } from './meditations.page';

const routes: Routes = [
  {
    path: '',
    component: MeditationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeditationsPageRoutingModule {}
