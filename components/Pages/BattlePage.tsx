import Image from "next/image";
import styles from "./BattlePage.module.scss";

const DUMMY_POKEMON_BATTLE = [
  {
    pokemonFighter: {
      id: "pokemon-1",
      name: "pikachu",
      types: ["electric"],
      characteristics: {
        hp: 100,
        attack: 100,
        defense: 100,
        specialDefense: 100,
        speed: 100
      },
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    }
  },
  {
    pokemonFighter: {
      id: "pokemon-2",
      name: "charizard",
      types: ["fire", "flying"],
      characteristics: {
        hp: 100,
        attack: 100,
        defense: 100,
        specialDefense: 100,
        speed: 100
      },
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    }
  }
];

function BattlePage() {
  return (
    <div className={styles.battlePage}>
      <div className={styles.battleCard}>
        <h1 className={styles.title}>Battleground</h1>
        <div className={styles.arena}>
          <Image
            alt="pikachu"
            src={DUMMY_POKEMON_BATTLE[0].pokemonFighter.sprite}
            width={200}
            height={200}
          />
          <p>v/s</p>
          <Image
            alt="charizard"
            src={DUMMY_POKEMON_BATTLE[1].pokemonFighter.sprite}
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
}

export default BattlePage;
