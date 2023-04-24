import { Component, OnInit } from '@angular/core';
import { Resultado } from 'src/app/interfaces/pokeapi';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit{

  constructor(private pokemonService: PokemonService){}

  listacompleta:Resultado[] = []
  
  ngOnInit(): void {
    this.listapoke();
  }

  async listapoke(){
    this.listacompleta = [...this.listacompleta, ...await this.pokemonService.getByPage()];
    console.log(this.listacompleta)
  }

}
