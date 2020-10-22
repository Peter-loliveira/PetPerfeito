import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagPrincipalPageRoutingModule } from './pag-principal-routing.module';

import { PagPrincipalPage } from './pag-principal.page';
import { BarraInferiorComponent } from 'src/app/components/barra-inferior/barra-inferior.component';

//componentes


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagPrincipalPageRoutingModule
  ],
  declarations: [PagPrincipalPage, BarraInferiorComponent]
})
export class PagPrincipalPageModule {}
