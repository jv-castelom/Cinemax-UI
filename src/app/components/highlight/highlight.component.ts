import { Component, OnInit } from '@angular/core';
import {HighlightViewModel} from '../../shared/movieviewmodel';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css']
})
export class HighlightComponent implements OnInit {

  activeMenu: number;
  maxHighlight: number;
  movies: HighlightViewModel[];
  movie: HighlightViewModel;

  constructor() { }

  ngOnInit(): void {
    this.activeMenu = 0;
    this.maxHighlight = 2;
    this.movies = [
      {titulo: 'Matrix 4',
       direcao: 'Lana Wachowski',
       elenco: 'Keanu Reaves, Carrie-Anne Moss, Neil Patrick',
       image: '../../../assets/movies/matrix4.jpg',
       sinopse: 'Por enquanto, não foi revelada a sinopse oficial de Matrix 4, mas Keanu Reeves o descreve como uma emocionante história de amor e já adiantou como Neo e Trinity terão que se unir, após passarem anos separados, para enfrentar uma nova ameaça misteriosa.'
      },
      {
        titulo: 'Mulher Maravilha 1987',
        direcao: 'Patty Jenkins',
        elenco: 'Gal Gadot, Chris Pine, Kristen Wiig',
        image: '../../../assets/movies/WW84.jpg',
        sinopse: 'Mulher-Maravilha 1984 acompanha Diana Prince/Mulher-Maravilha (Gal Gadot) em 1984, durante a Guerra Fria, entrando em conflito com dois grande inimigos - o empresário de mídia Maxwell Lord (Pedro Pascal) e a amiga que virou inimiga Barbara Minerva/Cheetah (Kristen Wiig) - enquanto se reúne com seu interesse amoroso Steve Trevor (Chris Pine).'
      },
      {
        titulo: '007 - Sem Tempo Para Morrer',
        direcao: 'Cary Fukunaga',
        elenco: 'Daniel Craig, Rami Malek, Ralph Finnes',
        image: '../../../assets/movies/No_Time_to_Die.jpg',
        sinopse: 'Bond deixou o serviço ativo e está desfrutando de uma vida tranquila na Jamaica. Sua paz não dura muito quando seu velho amigo Felix Leiter, da CIA, aparece pedindo ajuda.'
      }
    ];
    this.movie = this.movies[0];
  }

  next(): void{
    this.activeMenu = this.activeMenu + 1;
    if (this.activeMenu > this.maxHighlight) {
      this.activeMenu = 0;
    }
    this.movie = this.movies[this.activeMenu];
  }

  previous(): void{
    const minimum = 0;
    this.activeMenu = this.activeMenu - 1;
    if (this.activeMenu < minimum) {
      this.activeMenu = this.maxHighlight;
    }
    this.movie = this.movies[this.activeMenu];
  }
}
