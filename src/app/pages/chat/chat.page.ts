import { Component, OnInit, ViewChild } from '@angular/core';
import  firebase from 'firebase';
import { UsuarioService } from 'src/app/services/UsuarioService';
import { Usuario } from 'src/models/Usuario';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  // @ViewChild("content") content: any;
  userName: string = "";
  mensagem: string = "";
  horaMensagem: Date = null;
  mensagens = [];
  private usuarioLogado: Usuario = new Usuario();
  
  constructor(private _usuarioService: UsuarioService) { 
    this.getMessages();
    this.usuarioLogado= this._usuarioService.retornarUsuarioLogado();
    console.log(this.usuarioLogado);
  }
  
  getMessages(){
    var messagesRef = firebase.database().ref().child("mensagens");
    messagesRef.on("value", (snap) => {
      var data = snap.val();
      this.mensagens = [];
      for(var key in data){
        this.mensagens.push(data[key]);
      }

      // this.scrollToBottom();
    });
  }

  // scrollToBottom(){
  //   var contentEnd = document.getElementById("content-end").offsetTop;
  //   this.content.scrollTo(0, contentEnd, 300);
  // }
  sendMessage(){
    // Se não houver texto na mensagem não faça nada
    if (!this.mensagem){
      return
    }
    this.horaMensagem = new Date();

    let minuto = this.horaMensagem.getMinutes();

    //Verifica se o min é menor que 10 e se posito acrescemnta um 0 à esquerda
    if (minuto < 10) {
      var horaAtual = `${this.horaMensagem.getHours()}:0${minuto}`;
    } else {
      var horaAtual = `${this.horaMensagem.getHours()}:${minuto}`;
    }

    this.userName = this.usuarioLogado.nome;

    console.log(horaAtual);    

    var messagesRef = firebase.database().ref().child("mensagens");
    messagesRef.push({mensagem: this.mensagem, nome: this.userName, hora: horaAtual });
    this.mensagem = "";
    // this.scrollToBottom();
  }


   // scrollToBottom(){
  //   var contentEnd = document.getElementById("content-end").offsetTop;
  //   this.content.scrollTo(0, contentEnd, 300);
  // }


  ngOnInit() {
  }

}


// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-chat',
//   templateUrl: './chat.page.html',
//   styleUrls: ['./chat.page.scss'],
// })
// export class ChatPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
