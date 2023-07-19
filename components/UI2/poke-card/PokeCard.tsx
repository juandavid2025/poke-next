import { PokemonCardProps } from "./poke-card.types";

import styles from "./poke-card.module.scss";

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, description }) => {
  return (
    <div className={styles.pokemon_card}>
      <img src={pokemon.image} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>{pokemon.type}</p>
      <p>HP: {description.hp}</p>
      <p>Speed: {description.speed}</p>
      <p>Attack: {description.attack}</p>
      <p>Defense: {description.defense}</p>
    </div>
  );
};

export default PokemonCard;
