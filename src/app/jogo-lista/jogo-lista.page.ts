import { Component, OnInit } from "@angular/core";
import { ViewWillEnter } from "@ionic/angular";
import { Genero } from "../shared/genero.enum";
import { Jogo } from "../shared/jogo";
import { JogoService } from "../shared/jogo.service";

@Component({
  selector: "app-jogo-lista",
  templateUrl: "./jogo-lista.page.html",
  styleUrls: ["./jogo-lista.page.scss"],
})
export class JogoListaPage implements OnInit, ViewWillEnter {
  listaJogos: Jogo[];

  constructor(private jogoService: JogoService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.listar();
  }

  listar() {
    this.listaJogos = this.jogoService.getJogos();
  }

  editar(jogo: Jogo) {}

  excluir(jogo: Jogo) {
    this.jogoService.excluir(jogo);
    this.listar();
  }

  getDescricaoGenero(genero: string) {
    switch (genero) {
      case Genero.CORRIDA:
        return "Corrida";
      case Genero.FPS:
        return "FPS";
      case Genero.ESPORTE:
        return "Esporte";
      case Genero.LUDICO:
        return "Lúdico";
      case Genero.RPG:
        return "RPG";
      case Genero.TABULEIRO:
        return "Tabuleiro";
    }
  }
}
