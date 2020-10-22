import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagPrincipalPageRoutingModule } from './pag-principal-routing.module';

import { PagPrincipalPage } from './pag-principal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagPrincipalPageRoutingModule
  ],
  declarations: [PagPrincipalPage]
})
export class PagPrincipalPageModule {}
