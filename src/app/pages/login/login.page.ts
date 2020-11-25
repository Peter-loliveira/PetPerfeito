import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/LoginService';
import { UsuarioService } from 'src/app/services/UsuarioService';
import { Login } from 'src/models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public login: Login = new Login();
  constructor(
    private _route: Router, 
    private _loginService: LoginService, 
    private _usuarioService: UsuarioService,
    private _msg:  AlertController) { }

  ngOnInit() {
  }

  ionViewDidEnter()  {
  }

  fazerLogin(){
    console.log(this.login)
    this._loginService.login(this.login).subscribe((res) => {
      this._usuarioService.logar(res);
      this._route.navigate(['/tabs']);
      console.log(res);
      this.limparCampos()
    });
  }

  fazerCadastro(){
    this._route.navigate(['/cad-usuario']);
  }

  limparCampos(){
    this.login.login = '';
    this.login.senha = '';
  }

}


