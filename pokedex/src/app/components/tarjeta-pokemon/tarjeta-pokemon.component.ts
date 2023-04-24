import { Component, Input } from '@angular/core';
import { Resultado } from 'src/app/interfaces/pokeapi';

@Component({
  selector: 'app-tarjeta-pokemon',
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrls: ['./tarjeta-pokemon.component.scss']
})
export class TarjetaPokemonComponent {

  @Input() data?:Resultado;

}
