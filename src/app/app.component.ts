<<<<<<< HEAD
//comentei aqui pq acho q esses imports n entram aqui.
//import { LoginPageModule } from './pages/login/login.module';
//import { CadastroPetsPageModule } from './pages/cadastro-pets/cadastro-pets.module';
=======
>>>>>>> 0b1b801b77f04f2f68c5f4e08da72218d8684312
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
<<<<<<< HEAD
  //rootPage:any = 'CadastroPetsPageModule'
  rootPage:any = 'CadastroPetsPageModule'
=======
>>>>>>> 0b1b801b77f04f2f68c5f4e08da72218d8684312
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
