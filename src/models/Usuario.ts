import { Pets } from 'src/models/Pets';
export class Usuario{
    public id: number = null;
    public nome: string = null;
    public sexo: string = null;
    public nascimento: String = null;
    public email: string = null;
    public cpf: string = null;
    public login: string = null;
    public senha: string = null;
    public confirmarSenha: string = null;
    public pets: Pets[] = new Array<Pets>();
   
}