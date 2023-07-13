import React from "react";
import Image from "next/image";

import { PokemonFighter } from "@/model/pokeFighter";
import BattleHealthBar from "./BattleHealthBar/BattleHealthBar";

import styles from "./BattleArena.module.scss";

const BattleArena: React.FC<{
  pokemon1: PokemonFighter;
  pokemon2: PokemonFighter;
}> = props => {
  return (
    <div className={styles.arena}>
      <div className={styles.arenaOverlay}>
        <Image
          alt={props.pokemon1.name}
          src={props.pokemon1.sprites.front}
          width={200}
          height={200}
          className={styles.image}
        />

        <div className={styles.playerNameIcon}>
          <Image
            alt="pokeball"
            src={"/page-images/pokeball.png"}
            width={20}
            height={20}
          />
          <p>Player1</p>
        </div>
        <BattleHealthBar
          maxHealthPoints={props.pokemon1.stats.hp}
          currentHealthPoints={props.pokemon1.stats.hp}
        />
      </div>
      <p className={styles.vs}>v/s</p>
      <div className={styles.arenaOverlay}>
        <Image
          alt={props.pokemon2.name}
          src={props.pokemon2.sprites.front}
          width={200}
          height={200}
          className={styles.image}
        />
        <div className={styles.playerNameIcon}>
          <p>Player2</p>
          <Image
            alt="pokeball"
            src={"/page-images/pokeball.png"}
            width={20}
            height={20}
          />
        </div>
        <BattleHealthBar
          maxHealthPoints={props.pokemon2.stats.hp}
          currentHealthPoints={props.pokemon2.stats.hp}
        />
      </div>
    </div>
  );
};

export default BattleArena;
