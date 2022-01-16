import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import Swiper core and required modules
import SwiperCore, { EffectFade, SwiperOptions } from 'swiper';
import {ModalController} from '@ionic/angular';
import {ModalpopupPage} from '../modalpopup/modalpopup.page';
// install Swiper modules
SwiperCore.use([EffectFade]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterContentChecked {

  config: SwiperOptions;
  config1: SwiperOptions;
  categories: any[] = [];
  trips: any[] = [];
  trips2: any[] = [];
 

  constructor(private modalController : ModalController,public router:Router) { }
  OpenModal()
   {

    this.modalController.create({component:ModalpopupPage}).then((modalElement)=>{
      modalElement.present();
    })
   }
  ngOnInit() {
    
    this.categories = [    
      { id: 1, name: 'Culture' }, 
      { id: 2, name: 'Circuits' },   
      { id: 3, name: 'Camp' },
      { id: 4, name: 'Montagnes' },
      { id: 5, name: 'Randonnee '},
      { id: 6, name: 'Lac'},
      { id: 7, name: 'Plages'},
      { id: 8, name: 'cascades '},
    ];
    
    this.trips = [
      { id: 1, name: 'Marrakech', category: 'Circuits', image: 'assets/imgs/Marrakech.jpg', price: '2000' },      
      { id: 2, name: 'Essaouira', category: 'Culture', image: 'assets/imgs/essaouira.jpg', price: '500' },
      { id: 3, name: 'Agadir', category: 'Plages', image: 'assets/imgs/Agadir.jpg', price: '1000' },
      { id: 4, name: 'Merzouga', category: 'Camp', image: 'assets/imgs/Merzouga.jpg', price: '800' },
      //{ id: 5, name: 'Ouzoud', category: 'cascades', image: 'assets/imgs/Ouzoud.jpg', price: '600' },
    ];
    this.trips2 = [
      { id: 5, name: 'Istanbul', category: 'Circuits', image: 'assets/imgs/istanbul.jpg', price: '2000' },      
      { id: 6, name: 'Paris', category: 'Culture', image: 'assets/imgs/paris.jpg', price: '500' },
      { id: 7, name: 'Bangkok', category: 'Plages', image: 'assets/imgs/Bangkok.jpg', price: '1000' },
      { id: 8, name: 'Geneve', category: 'Camp', image: 'assets/imgs/Geneve.jpg', price: '800' },
      //{ id: 5, name: 'Ouzoud', category: 'cascades', image: 'assets/imgs/Ouzoud.jpg', price: '600' },
    ];

   
  }

  ngAfterContentChecked() {
    this.config = {
      slidesPerView: 3
    };
    this.config1 = {
      slidesPerView: 3
    };
  }
 
}
