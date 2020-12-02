import { Genero } from './genero.enum';

export class Jogo {
    codigo: number;
    nome: string;
    valor: number; 
    logo: string;
    genero: Genero;
    dataLancamento: Date;
}
