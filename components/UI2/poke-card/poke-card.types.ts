export interface PokemonDescription {
  hp: number;
  speed: number;
  attack: number;
  defense: number;
}
export interface Pokemon {
  name: string;
  type: string;
  image: string;
}

export interface PokemonCardProps {
  pokemon: Pokemon;
  description: PokemonDescription;
}
