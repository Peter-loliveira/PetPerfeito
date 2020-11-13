import { Pets } from 'src/models/Pets';
import { UsuarioService } from 'src/app/services/UsuarioService';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag-principal',
  templateUrl: './pag-principal.page.html',
  styleUrls: ['./pag-principal.page.scss'],
})
export class PagPrincipalPage implements OnInit {
  
  private _usuarioLogado: Usuario = new Usuario()
  public pets: Pets[] = new Array<Pets>()

  constructor( 
    private _usuarioService: UsuarioService ,
    private _route: Router
    ) { 
    this._usuarioLogado = this._usuarioService.retornarUsuarioLogado()
  }

  

  ngOnInit() {
  }

  cadastrarPrimeiroPet(){
    this._route.navigate(['/tabs/cadPets'])
  }

}
