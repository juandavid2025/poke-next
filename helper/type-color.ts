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

export function getTypeColorByTypeName(typeName: string) {
  return pokemonTypeColors.get(typeName) || "";
}
