import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Pages
import { LoginPageModule } from './pages/login/login.module'
import { CadastroUsuarioPageModule } from './pages/cadastro-usuario/cadastro-usuario.module'
import { CadastroPetsPageModule } from './pages/cadastro-pets/cadastro-pets.module'
import { SelectPetPageModule } from './pages/select-pet/select-pet.module'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    //Pages
    LoginPageModule,
    CadastroUsuarioPageModule,
    CadastroPetsPageModule,
    SelectPetPageModule,
    
    //others imports
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
