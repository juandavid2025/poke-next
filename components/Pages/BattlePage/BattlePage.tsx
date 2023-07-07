import React from "react";
import Image from "next/image";

import { PokemonFighter } from "@/model/pokeFighter";

import styles from "./BattlePage.module.scss";

const BattlePage: React.FC<{
  player1team: PokemonFighter[];
  player2team: PokemonFighter[];
}> = ({ player1team, player2team }) => {
  return (
    <div className={styles.battlePage}>
      <div className={styles.battleCard}>
        <h1 className={styles.title}>Battleground</h1>
        <div className={styles.arena}>
          <Image
            alt="pikachu"
            src={player1team[0].sprites.front}
            width={200}
            height={200}
          />
          <p>v/s</p>
          <Image
            alt="charizard"
            src={player2team[1].sprites.front}
            width={200}
            height={200}
          />
        </div>
        <div className={styles.battleStats}>
          <div>
            <div className={styles.playerNameIcon}>
              <Image
                alt="Profile user"
                src={"/page-images/pokeball.png"}
                width={20}
                height={20}
              />
              <p>Player1</p>
            </div>
            <div />
          </div>
          <div>
            <div className={styles.playerNameIcon}>
              <p>Player2</p>
              <Image
                alt="Profile user"
                src={"/page-images/pokeball.png"}
                width={20}
                height={20}
              />
            </div>
            <div />
          </div>
        </div>
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
