import { ModalDeBuscasComponent } from './../../components/modal-de-buscas/modal-de-buscas.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit {

  constructor( private _modalController: ModalController ) { }

  ngOnInit() {
  }

async exibeFiltros() {
  
  const filtros = await this._modalController.create({
    component: ModalDeBuscasComponent
  });

  await filtros.present();

}

}
