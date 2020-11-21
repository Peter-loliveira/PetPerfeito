import { Observable } from 'rxjs';
import { Pets } from 'src/models/Pets';

export interface IPetsService{
    cadastrar(pets: Pets) : Observable<Pets>;
    remover(pets_id: number) : void;
    editar(pets: Pets) : Observable<Pets>;
    listar() : Promise<Pets[]>
    buscar(pets_id: number) : Observable<Pets>;    
}