import Image from "next/image";

import styles from "./StartingPage.module.scss";
import { Button } from "@/components/UI2/button";

function StartingPage() {
  const handleStartButton = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.organizer}>
        <div>
          <p className={styles.text}>Battle</p>
          <div className={styles.titleContainer}>
            <p className={`${styles.text} ${styles.title}`}>Pokemon</p>
            <Image
              alt="Pokeball"
              src={"/page-images/pokeball.png"}
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className={styles.imagesContainer}>
          <Image
            alt="Pokemon blastoise"
            src={"/page-images/blastoise.png"}
            width={200}
            height={200}
            className={`${styles.image} ${styles.image1}`}
          />
          <Image
            alt="Pokemon charizard"
            src={"/page-images/charizard.png"}
            width={200}
            height={200}
            className={`${styles.image} ${styles.image2}`}
          />
          <Image
            alt="Pokemon bulbasaur"
            src={"/page-images/bulbasaur.png"}
            width={200}
            height={200}
            className={`${styles.image} ${styles.image3}`}
          />
        </div>
        <Button onClick={handleStartButton}>Start</Button>
      </div>
    </div>
  );
}

export default StartingPage;
