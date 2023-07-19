import BattlePage from "@/components/Pages/BattlePage/BattlePage";
import { DUMMY_TEST_TEAM_1, DUMMY_TEST_TEAM_2 } from "@/data/dummy-test-data";

export default function Home() {
  return <BattlePage player1team={DUMMY_TEST_TEAM_1} player2team={DUMMY_TEST_TEAM_2}/>;
}
