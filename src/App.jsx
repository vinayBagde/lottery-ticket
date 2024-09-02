import "./App.css";
import Lottery from "./components/lotteryTicket/Lottery.jsx";

export default function App() {
  return (
    <>
      <Lottery n={3} winningSum={15} />
    </>
  );
}