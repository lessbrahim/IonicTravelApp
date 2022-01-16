import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
// import Swiper core and required modules
import SwiperCore, { EffectFade, SwiperOptions } from 'swiper';
import {ModalController} from '@ionic/angular';
import {ModalpopupPage} from '../modalpopup/modalpopup.page';
// install Swiper modules
SwiperCore.use([EffectFade]);


@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  config: SwiperOptions;
  config1: SwiperOptions;
  categories: any[] = [];
  trips: any[] = [];
  trips2: any[] = [];
  distinations: any[] = [];
  item: any;
  //MAROC---------------------------
   
  constructor(private modalController : ModalController,
    public router:Router,
     public navCtrl: NavController,
    private route: ActivatedRoute) { }
  OpenModal()
   {

    this.modalController.create({component:ModalpopupPage}).then((modalElement)=>{
      modalElement.present();
    })
   }
   
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('check id: ', id);
   
    this.categories = [    
      { id: 1, name: 'Culture' }, 
      { id: 2, name: 'Randonnee' },   
      { id: 3, name: 'Camp' },
      { id: 4, name: 'Montagnes' },
      { id: 5, name: 'Circuits '},
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
      { id: 5, name: 'Istanbul', categ$ory: 'Circuits', image: 'assets/imgs/istanbul.jpg', price: '2000' },      
      { id: 6, name: 'Paris', category: 'Culture', image: 'assets/imgs/paris.jpg', price: '500' },
      { id: 7, name: 'Bangkok', category: 'Plages', image: 'assets/imgs/Bangkok.jpg', price: '1000' },
      { id: 8, name: 'Geneve', category: 'Camp', image: 'assets/imgs/Geneve.jpg', price: '800' },
      //{ id: 5, name: 'Ouzoud', category: 'cascades', image: 'assets/imgs/Ouzoud.jpg', price: '600' },
    ];
    this.distinations = [  
      { id: id,code:9, name: 'Marrakech', category: 'Circuits', image: 'assets/imgs/9-1.jpg', price: '2000' },      
      { id: id,code:9, name: 'Marrakech', category: 'Culture', image: 'assets/imgs/9-2.jpg', price: '500' },
      { id: id,code:9, name: 'Marrakech', category: 'Plages', image: 'assets/imgs/9-3.jpg', price: '1000' },    
      { id: id,code:9, name: 'Marrakech', category: 'Circuits', image: 'assets/imgs/9-4.jpg', price: '2000' },  
    ];
   
  }

  ngAfterContentChecked() {
    this.config = {
      slidesPerView: 2.1
    };
    this.config1 = {
      slidesPerView: 2
    };
  }
 
}
