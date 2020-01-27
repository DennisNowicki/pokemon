import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../model/pokemon.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {
  names = [];

  constructor(private http: HttpClient) {}


  getAllPokemon(index: string): Observable < Pokemon[] > {
      return this.http
      .get < Pokemon[] > (`https://pokeapi.co/api/v2/pokemon/${index}`)
      .pipe(tap( res => console.log(res.name)));
    }

  }

