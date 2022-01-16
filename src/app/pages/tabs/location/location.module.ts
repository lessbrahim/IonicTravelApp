import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationPageRoutingModule } from './location-routing.module';

import { LocationPage } from './location.page';
import { SwiperModule } from 'swiper/angular';
import { ModalpopupPageModule } from '../modalpopup/modalpopup.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationPageRoutingModule,
    SwiperModule,
    ModalpopupPageModule
  ],
  declarations: [LocationPage]
})
export class LocationPageModule {}
