import React from "react";
import { pokemonMove } from "@/model/pokeMove";

import MoveItem from "./MoveItem/MoveItem";

import styles from "./BattleMovesDisplay.module.scss";

const BattleMovesDisplay: React.FC<{ pokemonMoves: pokemonMove[] }> = ({
  pokemonMoves
}) => {
  return (
    <div className={styles.movesContainer}>
      <div className={styles.movesOverlay}>
        {pokemonMoves.map(pokeMove => {
          return <MoveItem key={pokeMove.id} pokemonMove={pokeMove} />;
        })}
      </div>
    </div>
  );
};

export default BattleMovesDisplay;
