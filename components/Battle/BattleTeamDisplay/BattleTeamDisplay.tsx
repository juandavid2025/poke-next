import React from "react";

import { PokemonTeamDisplayStatus } from "@/model/pokeTeamDisplayStatus";
import TeamDisplayStatus from "./TeamDisplayStatus/TeamDisplayStatus";

import styles from "./BattleTeamDisplay.module.scss";

const BattleTeamDisplay: React.FC<{
  pokemonTeamsStatus: {
    teamDisplay1: PokemonTeamDisplayStatus[];
    teamDisplay2: PokemonTeamDisplayStatus[];
  };
}> = props => {
  return (
    <div className={styles.displayContainer}>
      <TeamDisplayStatus teamStatus={props.pokemonTeamsStatus.teamDisplay1} />
      <TeamDisplayStatus
        teamStatus={props.pokemonTeamsStatus.teamDisplay2}
        reversed
      />
    </div>
  );
};

export default BattleTeamDisplay;
