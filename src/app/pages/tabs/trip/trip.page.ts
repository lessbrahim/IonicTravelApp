import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.scss'],
})
export class TripPage implements OnInit {

  segmentValue = '1';
  item: any;
//MAROC---------------------------
  trips = [      
    { 
      id: 1, 
      name: 'Marrakech', 
      category: 'Circuits', 
      image: 'assets/imgs/Marrakech.jpg', 
      price: '2000', 
      rating: 4.5, 
      duration: 5, 
      description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      images: [
        'assets/imgs/Marrakech.jpg',   
      ]
    },
    { id: 2, name: 'Essaouira', category: 'Culture', image: 'assets/imgs/essaouira.jpg', price: '500', 
    rating: 4.8, 
    duration: 6, 
    description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    images: [
      'assets/imgs/essaouira.jpg',        
     
    ] },
    { id: 3, name: 'Agadir', category: 'Plages', image: 'assets/imgs/Agadir.jpg', price: '1000', 
    rating: 4.9, 
    duration: 10, 
    description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    images: [
      'assets/imgs/Agadir.jpg',
      
    ] },
    { id: 4, name: 'Merzouga', category: 'Camp', image: 'assets/imgs/Merzouga.jpg', price: '800', 
    rating: 4.2, 
    duration: 3, 
    description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    images: [
      'assets/imgs/Merzouga.jpg',
      
    ] },
//MONDE-------------------------


    { 
      id: 5, 
      name: 'istanbul', 
      category: 'Circuits', 
      image: 'assets/imgs/istanbul.jpg', 
      price: '2000', 
      rating: 4.5, 
      duration: 5, 
      description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      images: [
        'assets/imgs/istanbul.jpg',   
      ]
    },
    { id: 6, name: 'paris', category: 'Culture', image: 'assets/imgs/paris.jpg', price: '500', 
    rating: 4.8, 
    duration: 6, 
    description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    images: [
      'assets/imgs/paris.jpg',        
     
    ] },
    { id: 7, name: 'Bangkok', category: 'Plages', image: 'assets/imgs/Bangkok.jpg', price: '1000', 
    rating: 4.9, 
    duration: 10, 
    description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    images: [
      'assets/imgs/Bangkok.jpg',
      
    ] },
    { id: 8, name: 'Geneve', category: 'Camp', image: 'assets/imgs/Geneve.jpg', price: '800', 
    rating: 4.2, 
    duration: 3, 
    description:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    images: [
      'assets/imgs/Geneve.jpg',
      
    ] },
  ];

 

  
  currentImage: string;

  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('check id: ', id);
    if(!id) {
      this.navCtrl.back();
      return;
    } 
    this.item = this.trips.find(x => x.id == parseInt(id));
    this.currentImage = this.item.images[0];
  }

  segmentChanged(event) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }

  changeImage(image) {
    this.currentImage = image;
  }

}
