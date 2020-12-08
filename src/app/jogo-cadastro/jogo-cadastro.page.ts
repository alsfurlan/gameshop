import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from '../shared/genero.enum';
import { Jogo } from '../shared/jogo';
import { JogoService } from '../shared/jogo.service';

@Component({
  selector: 'app-jogo-cadastro',
  templateUrl: './jogo-cadastro.page.html',
  styleUrls: ['./jogo-cadastro.page.scss'],
})
export class JogoCadastroPage implements OnInit {
  
  jogo: Jogo;
  generos = Object.keys(Genero).map((key) => ({ valor: key, descricao: Genero[key]}));

  constructor(
    private jogoService: JogoService,
    private router: Router
  ) { 
    this.jogo = new Jogo();    
    this.jogo.codigo = this.jogoService.getCodigo();  
  }

  ngOnInit() {
  }

  salvar() {
    console.log(this.jogo);
    this.jogo.valor = parseFloat(this.jogo.valor.toString());
    this.jogoService.salvar(this.jogo);    
    this.router.navigate(['jogo-lista'])
  }
}
