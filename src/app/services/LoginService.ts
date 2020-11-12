import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginService } from 'src/app/interfaces/ILoginService';
import { Login } from 'src/models/Login';
import { Usuario } from 'src/models/Usuario';
import { Global } from 'src/theme/shared/Global';

@Injectable({
    'providedIn': 'root',
})

export class LoginService implements ILoginService {
    
    public apiUrl: string = Global.ApiUrl+"usuarios/login";

    constructor(private _http: HttpClient){

    }

    login(dados: Login): Observable<Usuario> {
        if(!dados.login) throw new Error('O campo login é obrigatorio.');
        if(!dados.senha) throw new Error('O campo senha é obrigatorio.')
        
        return this._http.post<Usuario>(this.apiUrl, dados);
    }
    
}