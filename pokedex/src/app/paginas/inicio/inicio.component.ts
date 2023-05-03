import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Resultado } from 'src/app/interfaces/pokeapi';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit{

  constructor(private pokemonService: PokemonService){}
  @ViewChild('tarjetas') tarjetasElement!:ElementRef;

  listacompleta:Resultado[] = []

  pagina:number = 1;
  cargando:boolean = false;
  pokemonSeleccionado?:Pokemon;
  
  ngOnInit(): void {
    this.listapoke();
    this.pokemonService.getById("1");
  }

  async listapoke(){
    this.cargando = true;
    this.listacompleta = [...this.listacompleta, ...await this.pokemonService.getByPage(this.pagina)];
    this.cargando = false;
    this.pagina++;
  }

  onScroll(e:any){
    if(this.cargando) return;
     console.log(e);
     if(Math.round(this.tarjetasElement.nativeElement.clientHeight + this.tarjetasElement.nativeElement.scrollTop) === e.srcElement.scrollHeight){
       this.listapoke();
     }
     
  }

  async tarjetaSeleccionada(id:string){
    this.pokemonSeleccionado = await this.pokemonService.getById(id);
<<<<<<< HEAD
    console.log(id)
=======
>>>>>>> bb6a09cef593780324a1c1d5c0e2c40eec43d206
  }

}
