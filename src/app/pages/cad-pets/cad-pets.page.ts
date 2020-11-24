import { Pets } from "src/models/Pets";
import { Component, OnInit } from "@angular/core";
import { PetsService } from "src/app/services/PetsService";
import { AlertController } from '@ionic/angular';

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
    private _alerta: AlertController,
    private _petService: PetsService,
    ) {
      this.pet.namoro = 'N'
    }

  ngOnInit() {
    
  }

  ionViewDidEnter()  {
  }

  async cadastrarPet() {
    if (!this.dataNascimentoPet) {
      console.log('CampoObrigatorio');
      return
    }
    this.pet.nascimento = this.dataNascimentoPet.substring(0, 10);
    this._petService.cadastrar(this.pet).subscribe((res) => {
      console.log(res);
    });

    let mensagemAlerta: string = "Cadastro realizado com sucesso.";
    const alerta = await this._alerta.create({header: 'Sucesso',message: mensagemAlerta, buttons:['OK']
    });
    await alerta.present()
  }

  ConfiguraNamoro(){
    this.escolhaNamoro = document.getElementById('namoro');
    if (this.escolhaNamoro.checked) {
      this.pet.namoro = 'S'
    } else {this.pet.namoro = 'N'}
  }

}
