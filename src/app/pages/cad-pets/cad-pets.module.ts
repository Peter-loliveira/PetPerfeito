import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadPetsPageRoutingModule } from './cad-pets-routing.module';

import { CadPetsPage } from './cad-pets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadPetsPageRoutingModule
  ],
  declarations: [CadPetsPage]
})
export class CadPetsPageModule {}
