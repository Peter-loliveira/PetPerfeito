import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import firebase from 'firebase';
import {ChatPage} from '../app/pages/chat/chat.page'




const firebaseConfig = {
  apiKey:"AIzaSyAsg4L40-BRArQfR-aFH-Mx8JmT1OM1f7g",
  authDomain:"pet-perfeito-22335.firebaseapp.com",
  databaseURL:"https://pet-perfeito-22335.firebaseio.com",
  projectId:"pet-perfeito-22335",
  storageBucket:"pet-perfeito-22335.appspot.com",
  messagingSenderId:"701284366744",
  appId:"1:701284366744:web:e9c660730ca176191593ed",
  measurementId:"G-BY0D7VVBEP"
};


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage:any = ChatPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
   firebase.initializeApp(firebaseConfig);
  }
}
