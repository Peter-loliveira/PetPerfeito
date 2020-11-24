import { AlertController } from '@ionic/angular';
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
    private _route: Router,
    private _alerta: AlertController
  ) {}

  ngOnInit() {}

  async criarUsuario() {
    this.usuario.nascimento =  this.dataNascimentoUsuario.substring(0, 10);
    console.log(this.usuario);
    const Usuario = await this._usuarioService.cadastrar(this.usuario).subscribe((res) => {
      console.log(res);
    });

    
    let mensagemAlerta: string =
      `Cadastro realizado.\nBemvindo(a) ${this.usuario.nome}`
    const alerta = await this._alerta.create({header: 'Sucesso',message: mensagemAlerta, buttons:['OK']
    });
    await alerta.present()
    this._route.navigate(["/login"]);
  }
}
