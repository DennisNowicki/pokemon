import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../shared/model/pokemon';
import { PokemonService } from '../../shared/services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pokemon$: Observable<Pokemon[]>;
  public pokemonDetail$: Observable<any[]>;

  constructor(private pokemonService: PokemonService) { }

  addFavie(value) {
    console.log(value);
    this.pokemonDetail$ = this.pokemonService.addFavie(value);
    this.pokemonDetail$.subscribe(res => { console.log(res)});
    this.addFavieDetail(this.pokemonDetail$);
  }

  addFavieDetail(pokemon) {
    // id === null, omdat deze auto wordt ingevuld door de json server
    console.log(pokemon);
    const newPokiesJSON = new Pokemon(null, pokemon.name, pokemon.type, pokemon.url);
    this.pokemonService.addFavieJSON(newPokiesJSON)
      .subscribe((addedPokemon) => {
        // pokemons opnieuw ophalen in de subscription
        this.pokemon$ = this.pokemonService.getPokemon();
      });
  }

  ngOnInit() {
    this.pokemon$ = this.pokemonService.getPokeApi();
    this.pokemon$.subscribe(res => { console.log(res)});
  }

}
