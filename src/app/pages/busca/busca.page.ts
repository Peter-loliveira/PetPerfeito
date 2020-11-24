import { ModalDeBuscasComponent } from "./../../components/modal-de-buscas/modal-de-buscas.component";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Pets } from "src/models/Pets";
import { PetsService } from "src/app/services/PetsService";

@Component({
  selector: "app-busca",
  templateUrl: "./busca.page.html",
  styleUrls: ["./busca.page.scss"],
})
export class BuscaPage implements OnInit {

  accounts = [
    {
      name: 'Peter Lange',
      balance: 1000
    },
    {
      name: 'Carla Fabiana',
      balance: 1500
    }
  ]


  public pets: Pets[] = new Array<Pets>();

  constructor(
    private _modalController: ModalController,
    private _petsService: PetsService
  ) {}

  ngOnInit() {}
  
  ngOnDestroy(): void {
    this.pets = [];
    console.log('A página limpou a lista de PETS!');
  }

  async  openModal(account){
    const modal = await this._modalController.create({
      component: ModalDeBuscasComponent,
      componentProps: {name: account.name, balance: account.balance}
    });
    
    await modal.present();

    const {data: newbalance, role} = await modal.onWillDismiss();


    if (role === 'Depositado') {
      const index = this.accounts.findIndex(acc => acc.name === account.name);
      this.accounts[index].balance = newbalance;
    }
    
  }














  // async exibeFiltros() {
  //   const filtros = await this._modalController.create({
  //     component: ModalDeBuscasComponent,
  //   });
  //   await filtros.present();
  // }

  // async obterListaPets() {
  //   const listaPets = await this._petsService.listar();
  //   this.pets = listaPets;
  //   console.log(this.pets);
  // }
}
