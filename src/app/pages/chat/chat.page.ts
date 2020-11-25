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
    this.userName = this.usuarioLogado.nome;
    var messagesRef = firebase.database().ref().child("mensagens");
    messagesRef.push({mensagem: this.mensagem, nome: this.userName });
    this.mensagem = "";
  }



  ngOnInit() {
  }

}
