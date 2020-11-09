import {IPetsService} from 'src/app/interfaces/IPetsService';
import { Pets} from 'src/models/Pets';
import { from, Observable } from 'rxjs';
import { Global } from 'src/theme/shared/Global';

export class PetsService implements IPetsService{
   
    public apiUrl: string = Global.ApiUrl+"carros";

    cadastrar(pets: Pets): Observable<Pets> {
        throw new Error("Method not implemented.");
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