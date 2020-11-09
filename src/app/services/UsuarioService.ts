import { IUsuarioService } from 'src/app/interfaces/IUsuarioService';
import { Usuario } from 'src/models/Usuario';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Global } from 'src/theme/shared/Global';
@Injectable({
    'providedIn': 'root'
})
export class UsuarioService implements IUsuarioService {
   
    public apiUrl: string = Global.ApiUrl+"usuarios";
    
    constructor(private _httpClient: HttpClient) {

    }
    cadastrar(usuario: Usuario): Observable<Usuario> {
        if (!usuario.nome) throw new Error ('O campo Nome é obrigatorio.')
        if (!usuario.sexo) throw new Error ('O campo Sexo é obrigatorio.')
        if (!usuario.nascimento) throw new Error ('O campo Data de nascimento é obrigatorio.')
        if (!usuario.email) throw new Error ('O campo E-mail é obrigatorio.')
        if (!usuario.cpf) throw new Error ('O campo Cpf é obrigatorio.')
        if (!usuario.login) throw new Error ('O campo Login é obrigatorio.')
        if (!usuario.senha) throw new Error ('O campo Senha é obrigatorio.')
        if (usuario.senha != usuario.confirmarSenha) throw new Error (' As senhas não coincidem.')
        throw new Error(" Já pode salvar.");
    }

    atualizar(usuario: Usuario): Observable<Usuario> {
        
        throw new Error("Method not implemented.");
    }
    logar(usuario: Usuario): void {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    }
    retornarUsuarioLogado(): Usuario {
        let usuario:Usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
        return usuario;
    }

}