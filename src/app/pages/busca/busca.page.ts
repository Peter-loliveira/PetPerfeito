import { ModalDeBuscasComponent } from './../../components/modal-de-buscas/modal-de-buscas.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pets } from 'src/models/Pets';
import { PetsService } from 'src/app/services/PetsService';
import { Usuario } from 'src/models/Usuario';
import { UsuarioService } from 'src/app/services/UsuarioService';
import { PagPrincipalPage } from '../pag-principal/pag-principal.page';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit {

  private _usuarioLogado: Usuario = new Usuario()
  public pets: Pets[] = new Array<Pets>();

  constructor( 
    private _modalController: ModalController,
    private _petsService: PetsService
    ) { 
    }

  ngOnInit(  ) {
    
  }

  ionViewDidEnter() {
    this.obterListaPets();
  }

async exibeFiltros() {
  const filtros = await this._modalController.create({
    component: ModalDeBuscasComponent
  });

  await filtros.present();

}

async obterListaPets() {
  const listaPets = await this._petsService.listar();
  this.pets = listaPets;
  console.log(this.pets)
}

}
