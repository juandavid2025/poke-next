import React from "react";

import { pokemonMove } from "@/model/pokeMove";

import { getTypeColorByTypeName } from "@/helper/type-color";

import styles from "./MoveItem.module.scss";

const MoveItem: React.FC<{ pokemonMove: pokemonMove }> = ({ pokemonMove }) => {
  return (
    <div
      className={styles.moveItem}
      style={{
        border: `6px solid ${getTypeColorByTypeName(pokemonMove.type)}`
      }}
    >
      <p>{pokemonMove.name}</p>
    </div>
  );
};

export default MoveItem;
