import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-foto-pokemon',
  templateUrl: './foto-pokemon.component.html',
  styleUrls: ['./foto-pokemon.component.scss']
})
export class FotoPokemonComponent implements OnChanges{
  ngOnChanges(): void {
      
  }

  @Input() pokemon?:Pokemon;
  descripcion:string = "";
}
