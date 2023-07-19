import { NextPage } from "next";
import Image from "next/image";
import styles from "./SelectPage.module.scss";
import { PokeCard } from "@/components/UI2/poke-card";
import { Pokemon } from "@/components/UI2/poke-card/poke-card.types";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { PokemonFighter } from "@/model/pokeFighter";
import {
  getBasicInfo,
  getDescription,
  getPokemonData,
} from "@/helper/getPokemonData";
import PokemonCard from "@/components/UI2/poke-card/PokeCard";

const SelectPage: NextPage = () => {
  const [pokemons, setPokemons] = useState<PokemonFighter[]>([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const data = await getPokemonData();
        setPokemons(data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchPokemonData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div>
        <ul style={{ margin: "0" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className={styles.container}>
      <div className={styles.organizer}>
        <div>
          <p className={styles.text}>Select your</p>
          <div className={styles.titleContainer}>
            <p className={`${styles.text} ${styles.title}`}>Pòkemons</p>
            <Image
              alt="Pokeball"
              src={"/page-images/pokeball.png"}
              width={30}
              height={30}
            />
          </div>
          <div className={styles.imagesContainer}>
            <div className={styles["pokemon-carousel"]}>
              <Slider {...settings}>
                {pokemons.map((pokemon, index) => (
                  <div key={index}>
                    <PokemonCard
                      key={index}
                      pokemon={getBasicInfo(pokemon)}
                      description={getDescription(pokemon)}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPage;
