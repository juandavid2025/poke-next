import { Button } from "@/components/UI2/button";

import styles from "../styles/pages/next-steps/next-steps.module.scss";
import { useRouter } from "next/router";

export default function NextSteps() {
  const router = useRouter();
  const handleRandomButton = () => {
    router.push("/battle");
  };
  const handleManualButton = () => {
    router.push("/select");
  };
  return (
    <div className={styles.container}>
      <div className={styles.organizer}>
        <h1 className={styles.title}>How do you want to select your team?</h1>
        <div className={styles.buttons_container}>
          <Button onClick={handleRandomButton}>Randomly</Button>
          <Button onClick={handleManualButton}>Manually</Button>
        </div>
      </div>
    </div>
  );
}
