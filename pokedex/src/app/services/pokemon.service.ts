import { Injectable } from '@angular/core';
import { Resultado } from '../interfaces/pokeapi';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  async getByPage():Promise<Resultado[]>{
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=500&offser=1")
    const resJson = await res.json();
    if(resJson.results.length > 0) return resJson.results
    return [];
  }

  getById(){
    //https://pokeapi.co/api/v2/ability/
  }

  getDescripcion(){

  }
}
