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
    this.pokemonApiService.getAllPokemon().subscribe(pokemons => this.pokemon = pokemons);
  }
}
