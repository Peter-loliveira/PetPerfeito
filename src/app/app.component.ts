//comentei aqui pq acho q esses imports n entram aqui.
//import { LoginPageModule } from './pages/login/login.module';
//import { CadastroPetsPageModule } from './pages/cadastro-pets/cadastro-pets.module';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  //rootPage:any = 'CadastroPetsPageModule'
  rootPage:any = 'CadastroPetsPageModule'
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
