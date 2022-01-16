import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.page.html',
  styleUrls: ['./modalpopup.page.scss'],
})
export class ModalpopupPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit()
   {
   }

  CloseModal()
  {
    this.modalController.dismiss();
  }
  searchTerm:String;

  listpays=[
  {id:1,pays: "Espagne",ville: "Madrid"},
  {id:2,pays: "Espagne",ville: "Barcelone"},
  {id:3,pays: "France",ville: "Paris"},
  {id:4,pays: "Suisse",ville: "Geneve"},
  {id:5,pays: "Italie",ville: "Rome"},
  {id:6,pays: "Italie",ville: "Venise"},
  {id:7,pays: "Malaisie",ville: "Kuala Lumpur"},
  {id:8,pays: "Malaisie",ville: "Malacca"},
  {id:9,pays: "Maroc",ville: "Marrakech"},
  {id:10,pays: "Maroc",ville: "Essaouira"},
  {id:11,pays: "Maroc",ville: "Casablanca"},
  {id:12,pays: "Maroc",ville: "Agadir"},
  {id:13,pays: "Maroc",ville: "Fes"},
  {id:14,pays: "Maroc",ville: "Tanger"},
  {id:15,pays: "Maroc",ville: "Merzouga"},
  {id:16,pays: "Republique tcheque",ville: "Prague"},
  {id:17,pays: "Thailande",ville: "Bangkok"},
  {id:18,pays: "Turquie",ville: "Istanbul"},
  {id:19,pays: "Pays-Bas",ville: "Amsterdam"}
 
  ];


}
