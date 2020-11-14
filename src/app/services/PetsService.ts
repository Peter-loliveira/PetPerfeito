import { IPetsService } from "src/app/interfaces/IPetsService";
import { Usuario } from "src/models/Usuario";
import { HttpClient } from "@angular/common/http";
import { Pets } from "src/models/Pets";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Global } from "src/theme/shared/Global";

import { UsuarioService } from "src/app/services/UsuarioService";

@Injectable({
  providedIn: "root",
})
export class PetsService implements IPetsService {
  public apiUrl: string = Global.ApiUrl + "pets";
  private _usuarioLogado: Usuario = new Usuario();

  constructor(
    private _usuarioServices: UsuarioService,
    private _http: HttpClient
  ) {
    this._usuarioLogado = this._usuarioServices.retornarUsuarioLogado();
  }

  cadastrar(pets: Pets): Observable<Pets> {
    if (!pets.nome) throw new Error("O campo Nome é obrigatorio.");
    if (!pets.nascimento) throw new Error("O campo Data de nascimento é obrigatorio.");
    if (!pets.tipo) throw new Error("O campo Tipo é obrigatorio.");
    if (!pets.raca) throw new Error("O campo Raca é obrigatorio.");
    if (!pets.sexo) throw new Error("O campo Sexo é obrigatorio.");
    pets.usuario_id = this._usuarioLogado.id;

    console.log(pets);

    return this._http.post<Pets>(this.apiUrl, pets);
  }

  remover(Pets_id: number): void {
    throw new Error("Method not implemented.");
  }

  editar(pets: Pets): Observable<Pets> {
    throw new Error("Method not implemented.");
  }

  listar(): Observable<Pets[]> {
    throw new Error("Method not implemented.");
  }

  buscar(pets_id: number): Observable<Pets> {
    throw new Error("Method not implemented.");
  }
}
