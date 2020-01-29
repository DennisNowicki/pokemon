import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../shared/model/pokemon';
import { PokemonService } from '../../shared/services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favie',
  templateUrl: './favie.component.html',
  styleUrls: ['./favie.component.css']
})
export class FavieComponent implements OnInit {
public pokemon$: Observable<Pokemon[]>;

  constructor(private pokemonService : PokemonService) { }

  ngOnInit() {
    this.pokemon$ = this.pokemonService.getPokemon();
   // check // this.pokemon$.subscribe(res => {console.log(res)});
  }

}
