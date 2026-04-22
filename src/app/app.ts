import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // ESTA ES LA PIEZA QUE FALTA
import { PokemonService } from './services/pokemon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // AL PONERLO AQUÍ, EL HTML YA NO DARÁ ERROR
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  public pokeService = inject(PokemonService);

  verDetalle(poke: any) {
    this.pokeService.seleccionarPokemon(poke);
  }
}
