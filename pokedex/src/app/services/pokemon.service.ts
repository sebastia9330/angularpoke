import { Injectable } from '@angular/core';
import { Resultado } from '../interfaces/pokeapi';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  async getByPage(page:number, limit:number = 40):Promise<Resultado[]>{
    if(page > 5) return [];
    const offset = limit*(page-1);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
    const resJson = await res.json();
    if(resJson.results.length > 0) return resJson.results
    return [];
  }

  async getById(id:string){
    //https://pokeapi.co/api/v2/ability/
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const resJson = await res.json();
    console.log(resJson);
  }

  getDescripcion(){

  }
}