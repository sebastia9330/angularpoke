import { Component, Output, Input, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { Resultado } from 'src/app/interfaces/pokeapi';
import { Pokemon, Species } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-tarjeta-pokemon',
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrls: ['./tarjeta-pokemon.component.scss']
})
export class TarjetaPokemonComponent implements OnChanges{
  clicked: any;
  constructor(private pokemonService: PokemonService){}
  
  ngOnChanges(): void {
      this.extraeId()
  }

  @Input() data?:Resultado;
  @Input() selecc:boolean = false;
  @Input() fullData?:Pokemon;
  @Output() selec = new EventEmitter<string>();
  id:string = "0";


  extraeId(){
    if(this.data && this.data.url !== ""){
      this.id = this.data.url.substring(34,this.data.url.length-1)
      return
    }
    if(this.fullData){
      this.id = this.fullData.species.url.substring(42,this.fullData.species.url.length-1);
      this.data = {name:this.fullData.species.name, url:""}
    }
    }

}
