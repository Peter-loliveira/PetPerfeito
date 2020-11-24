import { ModalDeBuscasComponent } from "./../../components/modal-de-buscas/modal-de-buscas.component";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Pets } from "src/models/Pets";

@Component({
  selector: "app-busca",
  templateUrl: "./busca.page.html",
  styleUrls: ["./busca.page.scss"],
})
export class BuscaPage implements OnInit {

  filtros = [
    {
      name: 'Peter Lange',
      balance: 1000,
      tipo: '',
      raca: '',
      sexo: '',
      idade: 0,

    },
  ]

  public pets: Pets[] = new Array<Pets>();

  constructor(
    private _modalController: ModalController,
  ) {}

  ngOnInit() {}
  
  ngOnDestroy(): void {
    this.pets = [];
    console.log('A página limpou a lista de PETS!');
  }

  async openModal(filtro){
    const modal = await this._modalController.create({
      component: ModalDeBuscasComponent,
      componentProps: {tipo: filtro.tipo}
    });
    await modal.present();

    const {data: filtros, role} = await modal.onWillDismiss();
    if (role === 'Depositado') {
      this.filtros = filtros;
      console.log(this.filtros[0].tipo);
      console.log(this.filtros[0].raca);
      console.log(this.filtros[0].sexo);
      console.log(this.filtros[0].idade);
    }
  }
}
