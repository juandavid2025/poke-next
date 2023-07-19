import {
  Pokemon,
  PokemonDescription,
} from "@/components/UI2/poke-card/poke-card.types";
import { PokemonAbility } from "@/model/pokeAbility";
import { PokemonFighter } from "@/model/pokeFighter";
import { pokemonMove } from "@/model/pokeMove";
import { PokemonNature } from "@/model/pokeNature";
import { PokemonType } from "@/model/pokeType";

import axios, { AxiosResponse } from "axios";

interface PokeApiResponse {
  id: number;
  name: string;
  types: PokemonType[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  sprites: {
    front_default: string;
    back_default: string;
  };
  moves: pokemonMove[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
}

export const getPokemonData = async (): Promise<PokemonFighter[]> => {
  const numberOfPokemon = 10;
  const pokemonData: PokemonFighter[] = [];

  try {
    for (let i = 1; i <= numberOfPokemon; i++) {
      const response: AxiosResponse<PokeApiResponse> = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${i}`
      );
      const pokemon = response.data;

      const pokemonDataItem: PokemonFighter = {
        id: String(pokemon.id),
        name: pokemon.name,
        types: pokemon.types,
        stats: {
          hp:
            pokemon.stats.find((stat) => stat.stat.name === "hp")?.base_stat ||
            0,
          attack:
            pokemon.stats.find((stat) => stat.stat.name === "attack")
              ?.base_stat || 0,
          defense:
            pokemon.stats.find((stat) => stat.stat.name === "defense")
              ?.base_stat || 0,
          special_attack:
            pokemon.stats.find((stat) => stat.stat.name === "special-attack")
              ?.base_stat || 0,
          special_defense:
            pokemon.stats.find((stat) => stat.stat.name === "special-defense")
              ?.base_stat || 0,
          speed:
            pokemon.stats.find((stat) => stat.stat.name === "speed")
              ?.base_stat || 0,
        },
        sprites: {
          front: pokemon.sprites.front_default,
          back: pokemon.sprites.back_default,
        },
        nature: {} as PokemonNature,
        moves: pokemon.moves,
        ability: {
          id: pokemon.abilities[0].ability.name,
          name: pokemon.abilities[0].ability.name,
          effect: "",
          short_effect: "",
        },
      };

      pokemonData.push(pokemonDataItem);
    }
    return pokemonData;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    return [];
  }
};

export const getBasicInfo = (pokemon: PokemonFighter): Pokemon => {
  return {
    name: pokemon.name,
    type: pokemon.types[0].name,
    image: pokemon.sprites.front,
  };
};

export const getDescription = (pokemon: PokemonFighter): PokemonDescription => {
  const { stats } = pokemon;
  return {
    hp: stats.hp,
    attack: stats.attack,
    defense: stats.defense,
    speed: stats.speed,
  };
};
