import { FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-de-buscas',
  templateUrl: './modal-de-buscas.component.html',
  styleUrls: ['./modal-de-buscas.component.scss'],
})
export class ModalDeBuscasComponent implements OnInit {

  @Input() name: String;
  @Input() balance: number;
  @Input() tipo: String;
  @Input() raca: String;
  @Input() sexo: String;
  @Input() idade: number;

  balanceInput = new FormControl;
  tipoInput = new FormControl;
  racaInput = new FormControl;
  sexoInput = new FormControl;
  idadeInput = new FormControl;

  constructor( private modal: ModalController ) { }

  ngOnInit() {}

  fecharFiltros() {
    this.modal.dismiss()
  }
  
  dismissModal(){
    const filtros = [
      {
        tipo: this.tipoInput.value,
        raca: this.racaInput.value,
        sexo: this.sexoInput.value,
        idade: this.idadeInput.value
      }
    ]
    const newBalance = this.balance + this.balanceInput.value;
    this.modal.dismiss(filtros, 'Depositado')
  }

}
