import styles from "./BattleHealthBar.module.scss";

const color100 = "#00ff00";
const color80 = "#80ff00";
const color60 = "#ffff00";
const color40 = "#ff8000";
const color20 = "#ff0000";

const BattleHealthBar: React.FC<{
  maxHealthPoints: number;
  currentHealthPoints: number;
}> = ({ maxHealthPoints, currentHealthPoints }) => {
  const healthPorcentage = (currentHealthPoints * 100) / maxHealthPoints;

  let healthColor = color100;
  if (healthPorcentage < 80) healthColor = color80;
  if (healthPorcentage < 60) healthColor = color60;
  if (healthPorcentage < 40) healthColor = color40;
  if (healthPorcentage < 20) healthColor = color20;

  return (
    <div>
      <progress
        id="health"
        value={currentHealthPoints}
        max={maxHealthPoints}
        style={{ accentColor: healthColor }}
        className={styles.progress}
      ></progress>
    </div>
  );
};

export default BattleHealthBar;
