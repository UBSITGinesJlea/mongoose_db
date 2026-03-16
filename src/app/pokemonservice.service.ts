import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonserviceService {
private http = inject(HttpClient);
private apiURL = 'https://localhost:3000/api.pokemon';


//state management using signals
pokemonList = signal<any[]>([]);

fetchPokemon(){
  this.http.get<any[]>(this.apiURL).subscribe(data => this.pokemonList.set(data))
}

savePokemon(data:any){
return this.http.post(this.apiURL, data);
}
}