import { Pets } from "src/models/Pets";
import { Component, OnInit } from "@angular/core";
import { PetsService } from "src/app/services/PetsService";

@Component({
  selector: "app-cad-pets",
  templateUrl: "./cad-pets.page.html",
  styleUrls: ["./cad-pets.page.scss"],
})
export class CadPetsPage implements OnInit {
  public pet: Pets = new Pets();
  public escolhaNamoro
  public dataNascimentoPet: string;
  
  
  constructor(
    private _petService: PetsService
    ) {}

  ngOnInit() {}

  cadastrarPet() {
    this.pet.nascimento = this.dataNascimentoPet.substring(0, 10);
    console.log(this.pet);
    this._petService.cadastrar(this.pet).subscribe((res) => {
      console.log(res);
    });

    let mensagemAlerta: string = "Cadastro realizado com sucesso.";
    alert(mensagemAlerta);
  }

  ConfiguraNamoro(){
    this.escolhaNamoro = document.getElementById('namoro');
    if (this.escolhaNamoro.checked) {
      this.pet.namoro = 'S'
    } else {this.pet.namoro = 'N'}
  }
}
