import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "src/app/services/UsuarioService";
import { Usuario } from "src/models/Usuario";

@Component({
  selector: "app-cad-usuario",
  templateUrl: "./cad-usuario.page.html",
  styleUrls: ["./cad-usuario.page.scss"],
})
export class CadUsuarioPage implements OnInit {
  public usuario: Usuario = new Usuario();
  public dataNascimentoUsuario: string;
  
  constructor(
    private _usuarioService: UsuarioService,
    private _route: Router
  ) {}

  ngOnInit() {}

  async criarUsuario() {
    console.log(this.usuario);
    this.usuario.nascimento =  this.dataNascimentoUsuario.substring(0, 10);
    const Usuario = await this._usuarioService.cadastrar(this.usuario).subscribe((res) => {
      console.log(res);
    });

    let mensagemAlerta: string =
      "Cadastro realizado com sucesso. Bem vindo " + this.usuario.nome;
    alert(mensagemAlerta);
    this._route.navigate(["/login"]);
  }
}
