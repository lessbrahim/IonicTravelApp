import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SwiperModule } from 'swiper/angular';
import { ModalpopupPageModule } from '../modalpopup/modalpopup.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule,
    ModalpopupPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
