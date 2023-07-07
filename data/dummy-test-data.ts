import { PokemonFighter } from "@/model/pokeFighter";

export const DUMMY_TEST_TEAM_1: PokemonFighter[] = [
  {
    id: "pokemon-3",
    name: "venusaur",
    types: [
      {
        id: "type-12",
        name: "grass",
        color: "#49d0b0",
        weakness: ["flying", "poison", "bug", "fire", "ice"],
        resistance: ["ground", "water", "grass", "electric"],
        imunity: []
      },
      {
        id: "type-4",
        name: "poison",
        color: "#A33EA1",
        weakness: ["ground", "psychic"],
        resistance: ["fighting", "poison", "bug", "grass", "fairy"],
        imunity: []
      }
    ],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      special_attack: 100,
      special_defense: 100,
      speed: 80
    },
    sprites: {
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png"
    },
    nature: {
      id: "nature-4",
      name: "calm",
      description: "calm - increase: special-defense, decrease: attack",
      increaseStat: "special-defense",
      decreaseStat: "attack"
    },
    moves: [
      {
        id: "move-14",
        name: "swords-dance",
        accuracy: null,
        power: null,
        pp: 20,
        priority: 0,
        effects: [
          {
            chance: 100,
            effect: "Increase attack by 2",
            short_effect: "attack +2",
            stats_changes: [{ statName: "attack", variation: 2 }]
          }
        ],
        type: "normal"
      },
      {
        id: "move-15",
        name: "cut",
        accuracy: 95,
        power: 50,
        pp: 30,
        priority: 0,
        effects: [],
        type: "normal"
      },
      {
        id: "move-20",
        name: "bind",
        accuracy: 85,
        power: 15,
        pp: 20,
        priority: 0,
        effects: [
          {
            chance: 100,
            effect:
              "Inflicts regular damage. For the next 2–5 turns, the target cannot leave the field and is damaged for 1/16 its max HP at the end of each turn. The user continues to use other moves during this time. If the user leaves the field, this effect ends. Has a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times. Averages to 3 hits per use. rapid spin cancels this effect.",
            short_effect:
              "Prevents the target from fleeing and inflicts damage for 2-5 turns.",
            stats_changes: []
          }
        ],
        type: "normal"
      },
      {
        id: "move-22",
        name: "vine-whip",
        accuracy: 100,
        power: 45,
        pp: 25,
        priority: 0,
        effects: [],
        type: "grass"
      }
    ],
    ability: {
      id: "ability-65",
      name: "overgrow",
      effect:
        "When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.",
      short_effect:
        "Strengthens grass moves to inflict 1.5× damage at 1/3 max HP or less."
    }
  },
  {
    id: "pokemon-4",
    name: "charmander",
    types: [
      {
        id: "type-10",
        name: "fire",
        color: "#fc6c6d",
        weakness: ["ground", "rock", "water"],
        resistance: ["bug", "steel", "fire", "grass", "ice", "fairy"],
        imunity: []
      }
    ],
    stats: {
      hp: 39,
      attack: 52,
      defense: 43,
      special_attack: 60,
      special_defense: 50,
      speed: 65
    },
    sprites: {
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png"
    },
    nature: {
      id: "nature-15",
      name: "rash",
      description: "rash - increase: special-attack, decrease: special-defense",
      increaseStat: "special-attack",
      decreaseStat: "special-defense"
    },
    moves: [
      {
        id: "move-44",
        name: "bite",
        accuracy: 100,
        power: 60,
        pp: 25,
        priority: 0,
        effects: [],
        type: "dark"
      },
      {
        id: "move-45",
        name: "growl",
        accuracy: 100,
        power: null,
        pp: 40,
        priority: 0,
        effects: [
          {
            chance: 100,
            effect: "Lowers the target's Attack by one stage.",
            short_effect: "Lowers the target's Attack by one stage.",
            stats_changes: [
              {
                statName: "attack",
                variation: -1
              }
            ]
          }
        ],
        type: "normal"
      },
      {
        id: "move-52",
        name: "ember",
        accuracy: 100,
        power: 40,
        pp: 25,
        priority: 0,
        effects: [
          {
            chance: 10,
            effect:
              "Inflicts regular damage. Has a $effect_chance% chance to burn the target.",
            short_effect: "Has a $effect_chance% chance to burn the target.",
            stats_changes: []
          }
        ],
        type: "fire"
      },
      {
        id: "move-53",
        name: "flamethrower",
        accuracy: 100,
        power: 90,
        pp: 15,
        priority: 0,
        effects: [
          {
            chance: 10,
            effect:
              "Inflicts regular damage. Has a $effect_chance% chance to burn the target.",
            short_effect: "Has a $effect_chance% chance to burn the target.",
            stats_changes: []
          }
        ],
        type: "fire"
      }
    ],
    ability: {
      id: "ability-94",
      name: "solar-power",
      effect:
        "During strong sunlight, this Pokémon has 1.5× its Special Attack but takes 1/8 of its maximum HP in damage after each turn.",
      short_effect:
        "Increases Special Attack to 1.5× but costs 1/8 max HP after each turn during strong sunlight."
    }
  },
  {
    id: "pokemon-7",
    name: "squirtle",
    types: [
      {
        id: "type-11",
        name: "water",
        color: "#76befe",
        weakness: ["grass", "electric"],
        resistance: ["steel", "fire", "water", "ice"],
        imunity: []
      }
    ],
    stats: {
      hp: 44,
      attack: 48,
      defense: 65,
      special_attack: 50,
      special_defense: 64,
      speed: 43
    },
    sprites: {
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png"
    },
    nature: {
      id: "nature-21",
      name: "brave",
      description: "brave - increase: attack, decrease: speed",
      increaseStat: "attack",
      decreaseStat: "speed"
    },
    moves: [
      {
        id: "move-36",
        name: "take-down",
        accuracy: 85,
        power: 90,
        pp: 20,
        priority: 0,
        effects: [
          {
            chance: 85,
            effect:
              "Inflicts regular damage. User takes 1/4 the damage it inflicts in recoil.",
            short_effect: "User receives 1/4 the damage it inflicts in recoil.",
            stats_changes: []
          }
        ],
        type: "normal"
      },
      {
        id: "move-38",
        name: "double-edge",
        accuracy: 100,
        power: 120,
        pp: 15,
        priority: 0,
        effects: [
          {
            chance: null,
            effect:
              "Inflicts regular damage. User takes 1/3 the damage it inflicts in recoil.",
            short_effect: "User receives 1/3 the damage inflicted in recoil.",
            stats_changes: []
          }
        ],
        type: "normal"
      },
      {
        id: "move-127",
        name: "waterfall",
        accuracy: 100,
        power: 80,
        pp: 15,
        priority: 0,
        effects: [
          {
            chance: 20,
            effect:
              "Inflicts regular damage. Has a $effect_chance% chance to make the target flinch.",
            short_effect:
              "Has a $effect_chance% chance to make the target flinch.",
            stats_changes: []
          }
        ],
        type: "water"
      },
      {
        id: "move-145",
        name: "bubble",
        accuracy: 100,
        power: 40,
        pp: 30,
        priority: 0,
        effects: [
          {
            chance: 10,
            effect:
              "Inflicts regular damage. Has a $effect_chance% chance to lower the target's Speed by one stage.",
            short_effect:
              "Has a $effect_chance% chance to lower the target's Speed by one stage.",
            stats_changes: [{ statName: "speed", variation: -1 }]
          }
        ],
        type: "water"
      }
    ],
    ability: {
      id: "ability-67",
      name: "torrent",
      effect:
        "When this Pokémon has 1/3 or less of its HP remaining, its water-type moves inflict 1.5× as much regular damage.",
      short_effect:
        "Strengthens water moves to inflict 1.5× damage at 1/3 max HP or less."
    }
  },
  {
    id: "pokemon-16",
    name: "pidgey",
    types: [
      {
        id: "type-1",
        name: "normal",
        color: "#A8A77A",
        weakness: ["fighting"],
        resistance: [],
        imunity: ["ghost"]
      },
      {
        id: "type-3",
        name: "flying",
        color: "#A98FF3",
        weakness: ["rock", "electric", "ice"],
        resistance: ["fighting", "bug", "grass"],
        imunity: ["ground"]
      }
    ],
    stats: {
      hp: 40,
      attack: 45,
      defense: 40,
      special_attack: 35,
      special_defense: 35,
      speed: 56
    },
    sprites: {
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
      back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png"
    },
    nature: {
      id: "nature-12",
      name: "impish",
      description: "impish - increase: defense, decrease: special-attack",
      increaseStat: "defense",
      decreaseStat: "special-attack"
    },
    moves: [
      {
        id: "move-33",
        name: "tackle",
        accuracy: 100,
        power: 40,
        pp: 35,
        priority: 0,
        effects: [],
        type: "normal"
      },
      {
        id: "move-38",
        name: "double-edge",
        accuracy: 100,
        power: 120,
        pp: 15,
        priority: 0,
        effects: [
          {
            chance: 100,
            effect:
              "Inflicts regular damage. User takes 1/3 the damage it inflicts in recoil.",
            short_effect: "User receives 1/3 the damage inflicted in recoil.",
            stats_changes: []
          }
        ],
        type: "normal"
      },
      {
        id: "move-129",
        name: "swift",
        accuracy: null,
        power: 60,
        pp: 20,
        priority: 0,
        effects: [
          {
            chance: null,
            effect:
              "Inflicts regular damage. Ignores accuracy and evasion modifiers.",
            short_effect: "Never misses.",
            stats_changes: []
          }
        ],
        type: "normal"
      },
      {
        id: "move-13",
        name: "razor-wind",
        accuracy: 100,
        power: 80,
        pp: 10,
        priority: 0,
        effects: [
          {
            chance: 10,
            effect:
              "Inflicts regular damage. User's critical hit rate is one level higher when using this move. User charges for one turn before attacking. This move cannot be selected by sleep talk.",
            short_effect: "Requires a turn to charge before attacking.",
            stats_changes: []
          }
        ],
        type: "normal"
      }
    ],
    ability: {
      id: "ability-145",
      name: "big-pecks",
      effect:
        "This Pokémon's Defense cannot be lowered by other Pokémon. This Pokémon can still be passed negative Defense modifiers through heart swap or guard swap.",
      short_effect: "Protects against Defense drops."
    }
  },
  {
    id: "pokemon-40",
    name: "wigglytuff",
    types: [
      {
        id: "type-1",
        name: "normal",
        color: "#A8A77A",
        weakness: ["fighting"],
        resistance: [],
        imunity: ["ghost"]
      }
    ],
    stats: {
      hp: 140,
      attack: 70,
      defense: 45,
      special_attack: 85,
      special_defense: 50,
      speed: 45
    },
    sprites: {
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
      back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/40.png"
    },
    nature: {
      id: "nature-3",
      name: "modest",
      description: "modest - increase: special-attack, decrease: attack",
      increaseStat: "special-attack",
      decreaseStat: "attack"
    },
    moves: [
      {
        id: "move-3",
        name: "double-slap",
        accuracy: 85,
        power: 15,
        pp: 10,
        priority: 0,
        effects: [
          {
            chance: null,
            effect:
              "Inflicts regular damage. Hits 2–5 times in one turn. Has a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times. Averages to 3 hits per use.",
            short_effect: "Hits 2-5 times in one turn.",
            stats_changes: []
          }
        ],
        type: "normal"
      },
      {
        id: "move-7",
        name: "fire-punch",
        accuracy: 100,
        power: 75,
        pp: 15,
        priority: 0,
        effects: [
          {
            chance: 10,
            effect:
              "Inflicts regular damage. Has a $effect_chance% chance to burn the target.",
            short_effect: "Has a $effect_chance% chance to burn the target.",
            stats_changes: []
          }
        ],
        type: "fire"
      },
      {
        id: "move-25",
        name: "mega-kick",
        accuracy: 75,
        power: 120,
        pp: 5,
        priority: 0,
        effects: [],
        type: "normal"
      },
      {
        id: "move-29",
        name: "headbutt",
        accuracy: 100,
        power: 70,
        pp: 15,
        priority: 0,
        effects: [
          {
            chance: 10,
            effect:
              "Inflicts regular damage. Has a $effect_chance% chance to make the target flinch.",
            short_effect:
              "Has a $effect_chance% chance to make the target flinch.",
            stats_changes: []
          }
        ],
        type: "normal"
      }
    ],
    ability: {
      id: "ability-172",
      name: "competitive",
      effect:
        "Raises Special Attack by two stages upon having any stat lowered.",
      short_effect:
        "Raises Special Attack by two stages upon having any stat lowered."
    }
  },
  // HERE
  {
    id: "pokemon-60",
    name: "poliwag",
    types: [
      {
        id: "type-11",
        name: "water",
        color: "#76befe",
        weakness: ["grass", "electric"],
        resistance: ["steel", "fire", "water", "ice"],
        imunity: []
      }
    ],
    stats: {
      hp: 40,
      attack: 50,
      defense: 40,
      special_attack: 40,
      special_defense: 40,
      speed: 90
    },
    sprites: {
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
      back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/60.png"
    },
    nature: {
      id: "nature-8",
      name: "mild",
      description: "mild - increase: special-attack, decrease: defense",
      increaseStat: "special-attack",
      decreaseStat: "defense"
    },
    moves: [
      {
        id: "move-1",
        name: "pound",
        accuracy: 100,
        power: 40,
        pp: 35,
        priority: 0,
        effects: [],
        type: "normal"
      },
      {
        id: "move-34",
        name: "body-slam",
        accuracy: 100,
        power: 85,
        pp: 15,
        priority: 0,
        effects: [
          {
            chance: 30,
            effect:
              "Inflicts regular damage. Has a $effect_chance% chance to paralyze the target.",
            short_effect:
              "Has a $effect_chance% chance to paralyze the target.",
            stats_changes: []
          }
        ],
        type: "normal"
      },
      {
        id: "move-36",
        name: "take-down",
        accuracy: 85,
        power: 90,
        pp: 20,
        priority: 0,
        effects: [
          {
            chance: null,
            effect:
              "Inflicts regular damage. User takes 1/4 the damage it inflicts in recoil.",
            short_effect: "User receives 1/4 the damage it inflicts in recoil.",
            stats_changes: []
          }
        ],
        type: "normal"
      },
      {
        id: "move-57",
        name: "surf",
        accuracy: 100,
        power: 90,
        pp: 15,
        priority: 0,
        effects: [
          {
            chance: null,
            effect:
              "Inflicts regular damage. If the target is in the first turn of dive, this move will hit with double power.",
            short_effect: "Inflicts regular damage and can hit Dive users.",
            stats_changes: []
          }
        ],
        type: "water"
      }
    ],
    ability: {
      id: "ability-11",
      name: "water-absorb",
      effect:
        "Whenever a water-type move hits this Pokémon, it heals for 1/4 of its maximum HP, negating any other effect on it. Water moves will ignore this Pokémon's substitute.",
      short_effect: "Absorbs water moves, healing for 1/4 max HP."
    }
  }
];

export const DUMMY_TEST_TEAM_2: PokemonFighter[] = [
  {
    id: "pokemon-3",
    name: "venusaur",
    types: [
      {
        id: "type-12",
        name: "grass",
        color: "#49d0b0",
        weakness: ["flying", "poison", "bug", "fire", "ice"],
        resistance: ["ground", "water", "grass", "electric"],
        imunity: []
      },
      {
        id: "type-4",
        name: "poison",
        color: "#A33EA1",
        weakness: ["ground", "psychic"],
        resistance: ["fighting", "poison", "bug", "grass", "fairy"],
        imunity: []
      }
    ],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      special_attack: 100,
      special_defense: 100,
      speed: 80
    },
    sprites: {
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png"
    },
    nature: {
      id: "nature-4",
      name: "calm",
      description: "calm - increase: special-defense, decrease: attack",
      increaseStat: "special-defense",
      decreaseStat: "attack"
    },
    moves: [
      {
        id: "move-14",
        name: "swords-dance",
        accuracy: null,
        power: null,
        pp: 20,
        priority: 0,
        effects: [
          {
            chance: 100,
            effect: "Increase attack by 2",
            short_effect: "attack +2",
            stats_changes: [{ statName: "attack", variation: 2 }]
          }
        ],
        type: "normal"
      },
      {
        id: "move-15",
        name: "cut",
        accuracy: 95,
        power: 50,
        pp: 30,
        priority: 0,
        effects: [],
        type: "normal"
      },
      {
        id: "move-20",
        name: "bind",
        accuracy: 85,
        power: 15,
        pp: 20,
        priority: 0,
        effects: [
          {
            chance: 100,
            effect:
              "Inflicts regular damage. For the next 2–5 turns, the target cannot leave the field and is damaged for 1/16 its max HP at the end of each turn. The user continues to use other moves during this time. If the user leaves the field, this effect ends. Has a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times. Averages to 3 hits per use. rapid spin cancels this effect.",
            short_effect:
              "Prevents the target from fleeing and inflicts damage for 2-5 turns.",
            stats_changes: []
          }
        ],
        type: "normal"
      },
      {
        id: "move-22",
        name: "vine-whip",
        accuracy: 100,
        power: 45,
        pp: 25,
        priority: 0,
        effects: [],
        type: "grass"
      }
    ],
    ability: {
      id: "ability-65",
      name: "overgrow",
      effect:
        "When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.",
      short_effect:
        "Strengthens grass moves to inflict 1.5× damage at 1/3 max HP or less."
    }
  },
  {
    id: "pokemon-4",
    name: "charmander",
    types: [
      {
        id: "type-10",
        name: "fire",
        color: "#fc6c6d",
        weakness: ["ground", "rock", "water"],
        resistance: ["bug", "steel", "fire", "grass", "ice", "fairy"],
        imunity: []
      }
    ],
    stats: {
      hp: 39,
      attack: 52,
      defense: 43,
      special_attack: 60,
      special_defense: 50,
      speed: 65
    },
    sprites: {
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png"
    },
    nature: {
      id: "nature-15",
      name: "rash",
      description: "rash - increase: special-attack, decrease: special-defense",
      increaseStat: "special-attack",
      decreaseStat: "special-defense"
    },
    moves: [
      {
        id: "move-44",
        name: "bite",
        accuracy: 100,
        power: 60,
        pp: 25,
        priority: 0,
        effects: [],
        type: "dark"
      },
      {
        id: "move-45",
        name: "growl",
        accuracy: 100,
        power: null,
        pp: 40,
        priority: 0,
        effects: [
          {
            chance: 100,
            effect: "Lowers the target's Attack by one stage.",
            short_effect: "Lowers the target's Attack by one stage.",
            stats_changes: [
              {
                statName: "attack",
                variation: -1
              }
            ]
          }
        ],
        type: "normal"
      },
      {
        id: "move-52",
        name: "ember",
        accuracy: 100,
        power: 40,
        pp: 25,
        priority: 0,
        effects: [
          {
            chance: 10,
            effect:
              "Inflicts regular damage. Has a $effect_chance% chance to burn the target.",
            short_effect: "Has a $effect_chance% chance to burn the target.",
            stats_changes: []
          }
        ],
        type: "fire"
      },
      {
        id: "move-53",
        name: "flamethrower",
        accuracy: 100,
        power: 90,
        pp: 15,
        priority: 0,
        effects: [
          {
            chance: 10,
            effect:
              "Inflicts regular damage. Has a $effect_chance% chance to burn the target.",
            short_effect: "Has a $effect_chance% chance to burn the target.",
            stats_changes: []
          }
        ],
        type: "fire"
      }
    ],
    ability: {
      id: "ability-94",
      name: "solar-power",
      effect:
        "During strong sunlight, this Pokémon has 1.5× its Special Attack but takes 1/8 of its maximum HP in damage after each turn.",
      short_effect:
        "Increases Special Attack to 1.5× but costs 1/8 max HP after each turn during strong sunlight."
    }
  },
  {
    id: "pokemon-7",
    name: "squirtle",
    types: [
      {
        id: "type-11",
        name: "water",
        color: "#76befe",
        weakness: ["grass", "electric"],
        resistance: ["steel", "fire", "water", "ice"],
        imunity: []
      }
    ],
    stats: {
      hp: 44,
      attack: 48,
      defense: 65,
      special_attack: 50,
      special_defense: 64,
      speed: 43
    },
    sprites: {
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png"
    },
    nature: {
      id: "nature-21",
      name: "brave",
      description: "brave - increase: attack, decrease: speed",
      increaseStat: "attack",
      decreaseStat: "speed"
    },
    moves: [
      {
        id: "move-36",
        name: "take-down",
        accuracy: 85,
        power: 90,
        pp: 20,
        priority: 0,
        effects: [
          {
            chance: 85,
            effect:
              "Inflicts regular damage. User takes 1/4 the damage it inflicts in recoil.",
            short_effect: "User receives 1/4 the damage it inflicts in recoil.",
            stats_changes: []
          }
        ],
        type: "normal"
      },
      {
        id: "move-38",
        name: "double-edge",
        accuracy: 100,
        power: 120,
        pp: 15,
        priority: 0,
        effects: [
          {
            chance: null,
            effect:
              "Inflicts regular damage. User takes 1/3 the damage it inflicts in recoil.",
            short_effect: "User receives 1/3 the damage inflicted in recoil.",
            stats_changes: []
          }
        ],
        type: "normal"
      },
      {
        id: "move-127",
        name: "waterfall",
        accuracy: 100,
        power: 80,
        pp: 15,
        priority: 0,
        effects: [
          {
            chance: 20,
            effect:
              "Inflicts regular damage. Has a $effect_chance% chance to make the target flinch.",
            short_effect:
              "Has a $effect_chance% chance to make the target flinch.",
            stats_changes: []
          }
        ],
        type: "water"
      },
      {
        id: "move-145",
        name: "bubble",
        accuracy: 100,
        power: 40,
        pp: 30,
        priority: 0,
        effects: [
          {
            chance: 10,
            effect:
              "Inflicts regular damage. Has a $effect_chance% chance to lower the target's Speed by one stage.",
            short_effect:
              "Has a $effect_chance% chance to lower the target's Speed by one stage.",
            stats_changes: [{ statName: "speed", variation: -1 }]
          }
        ],
        type: "water"
      }
    ],
    ability: {
      id: "ability-67",
      name: "torrent",
      effect:
        "When this Pokémon has 1/3 or less of its HP remaining, its water-type moves inflict 1.5× as much regular damage.",
      short_effect:
        "Strengthens water moves to inflict 1.5× damage at 1/3 max HP or less."
    }
  },
  {
    id: "pokemon-16",
    name: "pidgey",
    types: [
      {
        id: "type-1",
        name: "normal",
        color: "#A8A77A",
        weakness: ["fighting"],
        resistance: [],
        imunity: ["ghost"]
      },
      {
        id: "type-3",
        name: "flying",
        color: "#A98FF3",
        weakness: ["rock", "electric", "ice"],
        resistance: ["fighting", "bug", "grass"],
        imunity: ["ground"]
      }
    ],
    stats: {
      hp: 40,
      attack: 45,
      defense: 40,
      special_attack: 35,
      special_defense: 35,
      speed: 56
    },
    sprites: {
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
      back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png"
    },
    nature: {
      id: "nature-12",
      name: "impish",
      description: "impish - increase: defense, decrease: special-attack",
      increaseStat: "defense",
      decreaseStat: "special-attack"
    },
    moves: [
      {
        id: "move-33",
        name: "tackle",
        accuracy: 100,
        power: 40,
        pp: 35,
        priority: 0,
        effects: [],
        type: "normal"
      },
      {
        id: "move-38",
        name: "double-edge",
        accuracy: 100,
        power: 120,
        pp: 15,
        priority: 0,
        effects: [
          {
            chance: 100,
            effect:
              "Inflicts regular damage. User takes 1/3 the damage it inflicts in recoil.",
            short_effect: "User receives 1/3 the damage inflicted in recoil.",
            stats_changes: []
          }
        ],
        type: "normal"
      },
      {
        id: "move-129",
        name: "swift",
        accuracy: null,
        power: 60,
        pp: 20,
        priority: 0,
        effects: [
          {
            chance: null,
            effect:
              "Inflicts regular damage. Ignores accuracy and evasion modifiers.",
            short_effect: "Never misses.",
            stats_changes: []
          }
        ],
        type: "normal"
      },
      {
        id: "move-13",
        name: "razor-wind",
        accuracy: 100,
        power: 80,
        pp: 10,
        priority: 0,
        effects: [
          {
            chance: 10,
            effect:
              "Inflicts regular damage. User's critical hit rate is one level higher when using this move. User charges for one turn before attacking. This move cannot be selected by sleep talk.",
            short_effect: "Requires a turn to charge before attacking.",
            stats_changes: []
          }
        ],
        type: "normal"
      }
    ],
    ability: {
      id: "ability-145",
      name: "big-pecks",
      effect:
        "This Pokémon's Defense cannot be lowered by other Pokémon. This Pokémon can still be passed negative Defense modifiers through heart swap or guard swap.",
      short_effect: "Protects against Defense drops."
    }
  },
  {
    id: "pokemon-40",
    name: "wigglytuff",
    types: [
      {
        id: "type-1",
        name: "normal",
        color: "#A8A77A",
        weakness: ["fighting"],
        resistance: [],
        imunity: ["ghost"]
      }
    ],
    stats: {
      hp: 140,
      attack: 70,
      defense: 45,
      special_attack: 85,
      special_defense: 50,
      speed: 45
    },
    sprites: {
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
      back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/40.png"
    },
    nature: {
      id: "nature-3",
      name: "modest",
      description: "modest - increase: special-attack, decrease: attack",
      increaseStat: "special-attack",
      decreaseStat: "attack"
    },
    moves: [
      {
        id: "move-3",
        name: "double-slap",
        accuracy: 85,
        power: 15,
        pp: 10,
        priority: 0,
        effects: [
          {
            chance: null,
            effect:
              "Inflicts regular damage. Hits 2–5 times in one turn. Has a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times. Averages to 3 hits per use.",
            short_effect: "Hits 2-5 times in one turn.",
            stats_changes: []
          }
        ],
        type: "normal"
      },
      {
        id: "move-7",
        name: "fire-punch",
        accuracy: 100,
        power: 75,
        pp: 15,
        priority: 0,
        effects: [
          {
            chance: 10,
            effect:
              "Inflicts regular damage. Has a $effect_chance% chance to burn the target.",
            short_effect: "Has a $effect_chance% chance to burn the target.",
            stats_changes: []
          }
        ],
        type: "fire"
      },
      {
        id: "move-25",
        name: "mega-kick",
        accuracy: 75,
        power: 120,
        pp: 5,
        priority: 0,
        effects: [],
        type: "normal"
      },
      {
        id: "move-29",
        name: "headbutt",
        accuracy: 100,
        power: 70,
        pp: 15,
        priority: 0,
        effects: [
          {
            chance: 10,
            effect:
              "Inflicts regular damage. Has a $effect_chance% chance to make the target flinch.",
            short_effect:
              "Has a $effect_chance% chance to make the target flinch.",
            stats_changes: []
          }
        ],
        type: "normal"
      }
    ],
    ability: {
      id: "ability-172",
      name: "competitive",
      effect:
        "Raises Special Attack by two stages upon having any stat lowered.",
      short_effect:
        "Raises Special Attack by two stages upon having any stat lowered."
    }
  },
  // HERE
  {
    id: "pokemon-60",
    name: "poliwag",
    types: [
      {
        id: "type-11",
        name: "water",
        color: "#76befe",
        weakness: ["grass", "electric"],
        resistance: ["steel", "fire", "water", "ice"],
        imunity: []
      }
    ],
    stats: {
      hp: 40,
      attack: 50,
      defense: 40,
      special_attack: 40,
      special_defense: 40,
      speed: 90
    },
    sprites: {
      front:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
      back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/60.png"
    },
    nature: {
      id: "nature-8",
      name: "mild",
      description: "mild - increase: special-attack, decrease: defense",
      increaseStat: "special-attack",
      decreaseStat: "defense"
    },
    moves: [
      {
        id: "move-1",
        name: "pound",
        accuracy: 100,
        power: 40,
        pp: 35,
        priority: 0,
        effects: [],
        type: "normal"
      },
      {
        id: "move-34",
        name: "body-slam",
        accuracy: 100,
        power: 85,
        pp: 15,
        priority: 0,
        effects: [
          {
            chance: 30,
            effect:
              "Inflicts regular damage. Has a $effect_chance% chance to paralyze the target.",
            short_effect:
              "Has a $effect_chance% chance to paralyze the target.",
            stats_changes: []
          }
        ],
        type: "normal"
      },
      {
        id: "move-36",
        name: "take-down",
        accuracy: 85,
        power: 90,
        pp: 20,
        priority: 0,
        effects: [
          {
            chance: null,
            effect:
              "Inflicts regular damage. User takes 1/4 the damage it inflicts in recoil.",
            short_effect: "User receives 1/4 the damage it inflicts in recoil.",
            stats_changes: []
          }
        ],
        type: "normal"
      },
      {
        id: "move-57",
        name: "surf",
        accuracy: 100,
        power: 90,
        pp: 15,
        priority: 0,
        effects: [
          {
            chance: null,
            effect:
              "Inflicts regular damage. If the target is in the first turn of dive, this move will hit with double power.",
            short_effect: "Inflicts regular damage and can hit Dive users.",
            stats_changes: []
          }
        ],
        type: "water"
      }
    ],
    ability: {
      id: "ability-11",
      name: "water-absorb",
      effect:
        "Whenever a water-type move hits this Pokémon, it heals for 1/4 of its maximum HP, negating any other effect on it. Water moves will ignore this Pokémon's substitute.",
      short_effect: "Absorbs water moves, healing for 1/4 max HP."
    }
  }
];
