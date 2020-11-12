import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadUsuarioPageRoutingModule } from './cad-usuario-routing.module';

import { CadUsuarioPage } from './cad-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadUsuarioPageRoutingModule
  ],
  declarations: [CadUsuarioPage]
})
export class CadUsuarioPageModule {}
