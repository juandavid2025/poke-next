export interface pokemonMove {
  id: string;
  name: string;
  accuracy: number | null;
  power: number | null;
  pp: number;
  priority: number;
  effects: {
    chance: number | null;
    effect: string;
    short_effect: string;
    stats_changes: { statName: string; variation: number }[];
  }[];
  type: string;
}
