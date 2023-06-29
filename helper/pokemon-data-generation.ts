import fs from "fs";
import path from "path";
import { PokemonType } from "@/model/pokeType";
import { PokemonNature } from "@/model/pokeNature";

const pokemonTypeColors = new Map<string, string>([
  ["normal", "#A8A77A"],
  ["fire", "#fc6c6d"],
  ["water", "#76befe"],
  ["electric", "#ffd76f"],
  ["grass", "#49d0b0"],
  ["ice", "#96D9D6"],
  ["fighting", "#C22E28"],
  ["poison", "#A33EA1"],
  ["ground", "#E2BF65"],
  ["flying", "#A98FF3"],
  ["psychic", "#F95587"],
  ["bug", "#A6B91A"],
  ["rock", "#B6A136"],
  ["ghost", "#735797"],
  ["dragon", "#6F35FC"],
  ["dark", "#705746"],
  ["steel", "#B7B7CE"],
  ["fairy", "#D685AD"]
]);
const NATURES_NUMBER = 25;

const pokemonDataDirectory = path.join(process.cwd(), "data");
const filePath = path.join(pokemonDataDirectory, "pokemon-data.json");

async function getInfoFromAPI(subPath: string) {
  const response = await fetch(`${process.env.pokeapiv2_URL}${subPath}`);
  const data = await response.json();

  if (!response.ok) {
    return;
  }

  return data;
}

export async function getPokemonData() {
  const fileData = fs.readFileSync(filePath, "utf-8");
  const pokeData = await JSON.parse(fileData);
  return pokeData;
}

export async function generatePokeTypesNaturesData() {
  let dataToWrite: {
    types: PokemonType[];
    natures: PokemonNature[];
  } = {
    types: [],
    natures: []
  };

  // TYPES
  for (let i = 0; i < pokemonTypeColors.size; i++) {
    const data: {
      id: number;
      name: string;
      damage_relations: {
        double_damage_from: { name: string }[];
        half_damage_from: { name: string }[];
        no_damage_from: { name: string }[];
      };
    } = await getInfoFromAPI(`type/${i + 1}`);

    dataToWrite.types.push({
      id: `type-${data.id}`,
      name: data.name,
      color: pokemonTypeColors.get(data.name) || "",
      weakness: data.damage_relations.double_damage_from.map(
        doubleDamage => doubleDamage.name
      ),
      resistance: data.damage_relations.half_damage_from.map(
        halfDamage => halfDamage.name
      ),
      imunity: data.damage_relations.no_damage_from.map(
        noDamage => noDamage.name
      )
    });
  }

  // Natures
  for (let j = 0; j < NATURES_NUMBER; j++) {
    const data: {
      id: number;
      name: string;
      decreased_stat: {
        name: string;
      } | null;
      increased_stat: {
        name: string;
      } | null;
    } = await getInfoFromAPI(`nature/${j + 1}`);

    dataToWrite.natures.push({
      id: `nature-${data.id}`,
      name: data.name,
      description: `${data.name} - increase: ${
        data.increased_stat?.name || null
      }, decrease: ${data.decreased_stat?.name || null}`,
      increaseStat: data.increased_stat?.name || "",
      decreaseStat: data.decreased_stat?.name || ""
    });
  }

  // WriteFile
  fs.writeFileSync(filePath, JSON.stringify(dataToWrite));
}
