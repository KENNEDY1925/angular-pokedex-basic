import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public listaPokemon = signal<any[]>([]);
  public seleccionado = signal<any>(null);

  constructor() {
    this.cargar100Pokemon();
  }

  async cargar100Pokemon() {
    try {
      const listaTemporal = [];
      for (let i = 1; i <= 100; i++) {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const datos = await respuesta.json();

        listaTemporal.push({
          id: datos.id,
          nombre: datos.name,
          imagen: datos.sprites.other['official-artwork'].front_default,
          tipo: datos.types[0].type.name,
          poder: datos.abilities[0].ability.name,
          descripcion: `Este es ${datos.name}, un Pokémon de tipo ${datos.types[0].type.name} con la habilidad ${datos.abilities[0].ability.name}.`
        });
      }
      this.listaPokemon.set(listaTemporal);
    } catch (error) {
      console.error("Error al cargar datos:", error);
    }
  }

  seleccionarPokemon(poke: any) {
    this.seleccionado.set(poke);
  }
}
