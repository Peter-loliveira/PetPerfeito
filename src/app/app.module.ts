import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageModule } from './pages/login/login.module'

import { CadastroPetsPageModule } from './pages/cadastro-pets/cadastro-pets.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
<<<<<<< HEAD
    //Pages
    CadastroPetsPageModule,
    LoginPageModule,
    
    
    //others imports
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [
=======
    BrowserModule, IonicModule.forRoot(), AppRoutingModule],
    providers: [
      // LoginPageModule,
>>>>>>> 0b1b801b77f04f2f68c5f4e08da72218d8684312
    StatusBar,
    SplashScreen,    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
