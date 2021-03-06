import { PetsService } from "src/app/services/PetsService";
import { Pets } from "src/models/Pets";
import { UsuarioService } from "src/app/services/UsuarioService";
import { Component, OnInit } from "@angular/core";
import { Usuario } from "src/models/Usuario";
import { Router } from "@angular/router";

@Component({
  selector: "app-pag-principal",
  templateUrl: "./pag-principal.page.html",
  styleUrls: ["./pag-principal.page.scss"],
})
export class PagPrincipalPage implements OnInit {
  private _usuarioLogado: Usuario = new Usuario();
  public pets: Pets[] = new Array<Pets>();

  constructor(
    private _usuarioService: UsuarioService,
    private _route: Router,
    private _petsService: PetsService
  ) {  

  }

  ngOnInit() {}

  ngOnDestroy(): void {
    console.log("A página limpou a lista de PETS!");
    this.pets = [];
  }

  ionViewDidEnter() {
    console.log('Contructor chamado - tela principal');
    this.obterListaPets();
  }

  cadastrarPrimeiroPet() {
    this._route.navigate(["/tabs/cadPets"]);
  }

  async obterListaPets() {
    this._usuarioLogado = this._usuarioService.retornarUsuarioLogado();
    const listaPets = await this._petsService.listar();
    this.pets = listaPets;
    console.log(this.pets);
  }

  public sair() {
    this._route.navigate(["/"]);
    localStorage.clear();
  }
}
