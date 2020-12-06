import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/UsuarioService';
import { Usuario } from 'src/models/Usuario';
import { ModalDeBuscasComponent } from "./../../components/modal-de-buscas/modal-de-buscas.component";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Pets } from "src/models/Pets";
import { PetsService } from 'src/app/services/PetsService';

@Component({
  selector: "app-busca",
  templateUrl: "./busca.page.html",
  styleUrls: ["./busca.page.scss"],
})
export class BuscaPage implements OnInit {
  private _usuarioLogado: Usuario = new Usuario();
  public pets: Pets[] = new Array<Pets>();

  filtros = [
    {
      tipo: '',
      raca: '',
      sexo: '',
      idade: 0,

    },
  ]


  constructor(
    private _usuarioService: UsuarioService,
    private _petsService: PetsService,
    private _modalController: ModalController,
    private _route: Router
  ) {}

  ngOnInit() {}
  
  ngOnDestroy(): void {
    this.pets = [];
    console.log('A página limpou a lista de PETS!');
  }

  async openModal(filtro){
    const modal = await this._modalController.create({
      component: ModalDeBuscasComponent,
      componentProps: {tipo: filtro.tipo}
    });
    await modal.present();

    const {data: filtros, role} = await modal.onWillDismiss();
    if (role === 'Depositado') {
      this.filtros = filtros;
      console.log(this.filtros[0].tipo);
      console.log(this.filtros[0].raca);
      console.log(this.filtros[0].sexo);
      console.log(this.filtros[0].idade);
    }
  }

  async obterListaPets() {
    this._usuarioLogado = this._usuarioService.retornarUsuarioLogado();
    console.log('ANTES LISTA PETS 1');
    
    let listaPets = await this._petsService.filtrarPets();
    console.log('DEPOIS LISTA PETS 1');
    
    console.log('ANTES LISTA PETS 2');
    listaPets = JSON.parse(localStorage.getItem('FiltroPets'));
    console.log(listaPets);
    console.log('DEPOIS LISTA PETS 2');
    
    this.pets = listaPets;
    console.log(this.pets);
  }

  goChat(){
    this._route.navigate(["/tabs/chat"]);
  }
}
