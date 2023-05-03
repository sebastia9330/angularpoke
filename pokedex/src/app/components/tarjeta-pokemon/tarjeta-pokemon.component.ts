import { Component, Output, Input, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { Resultado } from 'src/app/interfaces/pokeapi';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-tarjeta-pokemon',
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrls: ['./tarjeta-pokemon.component.scss']
})
export class TarjetaPokemonComponent implements OnChanges{
  constructor(private pokemonService: PokemonService){}
  
  ngOnChanges(): void {
      this.extraeId()
  }

  @Input() data?:Resultado;
  @Input() selecc:boolean = false;
  @Output() selec = new EventEmitter<string>();
  id:string = "0";

  extraeId(){
    if(this.data){
      this.id = this.data.url.substring(34,this.data.url.length-1)
    }
  }

}
