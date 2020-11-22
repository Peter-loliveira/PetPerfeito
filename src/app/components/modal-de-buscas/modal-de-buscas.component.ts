import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-de-buscas',
  templateUrl: './modal-de-buscas.component.html',
  styleUrls: ['./modal-de-buscas.component.scss'],
})
export class ModalDeBuscasComponent implements OnInit {

  constructor( private _modalController: ModalController ) { }

  ngOnInit() {}

  fecharFiltros() {
    this._modalController.dismiss()
  }

}