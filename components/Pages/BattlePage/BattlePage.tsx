import React, { useEffect, useState } from "react";
// import Image from "next/image";

import { PokemonFighter } from "@/model/pokeFighter";
import { PokemonTeamDisplayStatus } from "@/model/pokeTeamDisplayStatus";

import BattleTeamDisplay from "@/components/Battle/BattleTeamDisplay/BattleTeamDisplay";
import BattleArena from "@/components/Battle/BattleArena/BattleArena";

import styles from "./BattlePage.module.scss";

const BattlePage: React.FC<{
  player1team: PokemonFighter[];
  player2team: PokemonFighter[];
}> = ({ player1team, player2team }) => {
  const [player1CurrPokemon, setPlayer1CurrPokemon] = useState(0); //change 0 for random or user selected later
  const [player2CurrPokemon, setPlayer2CurrPokemon] = useState(0); //change 0 for random or user selected later

  const [teamDisplayStatus, setTeamDisplayStatus] = useState<{
    teamDisplay1: PokemonTeamDisplayStatus[];
    teamDisplay2: PokemonTeamDisplayStatus[];
  }>({
    teamDisplay1: getTeamDisplayStatus(player1team, player1CurrPokemon),
    teamDisplay2: getTeamDisplayStatus(player2team, player2CurrPokemon)
  });

  return (
    <div className={styles.battlePage}>
      <div className={styles.battleCard}>
        <h1 className={styles.title}>Battleground</h1>
        <BattleTeamDisplay pokemonTeamsStatus={teamDisplayStatus} />
        <BattleArena
          pokemon1={player1team[player1CurrPokemon]}
          pokemon2={player2team[player2CurrPokemon]}
        />
        <div className={styles.attacksContainer}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default BattlePage;

function randomNumber(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

function getTeamDisplayStatus(
  playerTeamFighters: PokemonFighter[],
  currentFighterIndex: number
): PokemonTeamDisplayStatus[] {
  return playerTeamFighters.map(pokeFighter => {
    return {
      spriteURL: pokeFighter.sprites.front,
      status:
        pokeFighter.id === playerTeamFighters[currentFighterIndex].id
          ? "active"
          : "hidden"
    };
  });
}
