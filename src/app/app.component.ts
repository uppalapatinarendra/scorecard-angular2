import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'player';

  constructor(private authService: AuthService, private dataStorageService: DataStorageService){}

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyD-ndBbDM_oXaErPexGjbJN1Nks3EZyBVg",
      authDomain: "mainscorecard.firebaseapp.com",
      databaseURL: "https://mainscorecard.firebaseio.com",
      projectId: "mainscorecard",
      storageBucket: "mainscorecard.appspot.com",
      messagingSenderId: "110354986197"

    });
    firebase.auth().onAuthStateChanged(authData => {
      if(authData) {
        console.log("user " + authData.uid + " is logged in with " + authData.providerData);
        this.authService.getToken();
      } else {
        console.log("user is logged out");
        this.authService.logout();
      }
    });

  }
}
