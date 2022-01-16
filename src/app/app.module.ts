import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";

import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
//import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
//import {AngularFireModule} from 'angularfire2';
//import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
//import {AngularFireAuthModule} from 'angularfire2/auth';



// import { Camera } from '@ionic-native/camera/ngx';
// import { File } from '@ionic-native/file/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports:
   [BrowserModule,
     AngularFireModule.initializeApp(environment.firebase),
     IonicModule.forRoot(),
     AppRoutingModule,
     AngularFireAuthModule
   
    
  
    ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // Camera
    // File
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
