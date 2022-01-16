import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalpopupPageRoutingModule } from './modalpopup-routing.module';
import { ModalpopupPage } from './modalpopup.page';
import {Ng2SearchPipeModule} from 'ng2-search-filter'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalpopupPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ModalpopupPage]
})
export class ModalpopupPageModule {}
