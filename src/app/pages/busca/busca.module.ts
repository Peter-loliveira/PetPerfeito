import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscaPageRoutingModule } from './busca-routing.module';

import { BuscaPage } from './busca.page';
import { ModalDeBuscasComponent } from 'src/app/components/modal-de-buscas/modal-de-buscas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscaPageRoutingModule,

    ReactiveFormsModule,

  ],
  declarations: [
    BuscaPage,
    ModalDeBuscasComponent,    
  ],
  entryComponents: [ModalDeBuscasComponent]
})
export class BuscaPageModule {}
