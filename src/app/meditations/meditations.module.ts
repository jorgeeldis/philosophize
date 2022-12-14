import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeditationsPageRoutingModule } from './meditations-routing.module';

import { MeditationsPage } from './meditations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeditationsPageRoutingModule
  ],
  declarations: [MeditationsPage]
})
export class MeditationsPageModule {}
