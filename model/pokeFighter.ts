import { PokemonAbility } from "./pokeAbility";
import { pokemonMove } from "./pokeMove";
import { PokemonNature } from "./pokeNature";
import { PokemonStats } from "./pokeStats";
import { PokemonType } from "./pokeType";

export interface PokemonFighter {
  id: string;
  name: string;
  types: PokemonType[];
  stats: PokemonStats;
  sprites: { front: string; back: string };
  nature: PokemonNature;
  moves: pokemonMove[];
  ability: PokemonAbility;
}
