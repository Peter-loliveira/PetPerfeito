import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsuarioService } from './services/UsuarioService';
import { PetsService } from './services/PetsService';
import { LoginService } from './services/LoginService';

import {HttpClientModule} from '@angular/common/http';
import { ErrosGlobais } from 'src/theme/shared/ErrosGlobais';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule
  ],

    providers: [
    StatusBar,
    SplashScreen,
    UsuarioService,
    PetsService,
    LoginService,    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
   { provide: ErrorHandler, useClass:ErrosGlobais}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
