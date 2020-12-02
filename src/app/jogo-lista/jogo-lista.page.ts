import { Component, OnInit } from '@angular/core';
import { Jogo } from '../shared/jogo';
import { JogoService } from '../shared/jogo.service';

@Component({
  selector: 'app-jogo-lista',
  templateUrl: './jogo-lista.page.html',
  styleUrls: ['./jogo-lista.page.scss'],
})
export class JogoListaPage implements OnInit {

  listaJogos: Jogo[];

  constructor(
    private jogoService: JogoService
  ) { }

  ngOnInit() {
    this.listar();
  }
  
  listar() {  
    this.listaJogos = this.jogoService.getJogos();
  }

  editar(jogo:Jogo) {
    
  }

  excluir(jogo:Jogo) {
    this.jogoService.excluir(jogo);
    this.listar();
  }
}
