import React from "react";
import Image from "next/image";

import { PokemonTeamDisplayStatus } from "@/model/pokeTeamDisplayStatus";

import styles from "./TeamDisplayStatus.module.scss";

const TeamDisplayStatus: React.FC<{
  teamStatus: PokemonTeamDisplayStatus[];
  reversed?: boolean;
}> = props => {
  const mappedTeamDisplay = props.teamStatus.map((pokeDisplayState, index) => {
    const isHidden = pokeDisplayState.status === "hidden";
    const isFainted = pokeDisplayState.status === "fainted";

    return (
      <Image
        key={`pokeStatus-${index}`}
        alt={isHidden ? "pokeball" : "pokemon"}
        src={
          isHidden ? "/page-images/pokeball.png" : pokeDisplayState.spriteURL
        }
        width={25}
        height={25}
        className={`${styles.image} ${isFainted ? styles.fainted : ""}`}
      />
    );
  });

  if (props.reversed) {
    mappedTeamDisplay.reverse();
  }

  return <div className={styles.teamDisplay}>{mappedTeamDisplay}</div>;
};

export default TeamDisplayStatus;
