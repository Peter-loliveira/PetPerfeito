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

  balanceInput = new FormControl(22, Validators.required)

  constructor( private modal: ModalController ) { }

  ngOnInit() {}

  fecharFiltros() {
    this.modal.dismiss()
  }
  
  dismissModal(){
    this.modal.dismiss(null, 'Cancelado')
  }

  depositar(){
    const newBalance = this.balance + this.balanceInput.value;

    this.modal.dismiss(newBalance, 'Depositado')
    
     
  }

}
