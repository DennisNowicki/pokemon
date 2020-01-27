import { Component, OnInit } from '@angular/core';7
import { Pokemon } from './shared/model/pokemon.model';
import { PokemonApiService } from './shared/service/pokemon-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pokemonApp';
  pokemon: Pokemon[];

  constructor(private pokemonApiService: PokemonApiService) {}

  ngOnInit() {
    for(let j = 1; j < 808; j++) {
      this.pokemonApiService.getAllPokemon(j).subscribe(pokemons => this.pokemon = pokemons);
    }
  }
}
