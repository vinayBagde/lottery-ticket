import "./App.css";
import Lottery from "./components/lotteryTicket/Lottery.jsx";
import { sum } from "./components/lotteryTicket/helper.js";
export default function App() {
  let winCondition = (ticket) => {
    // return sum(ticket) === 15;
    // return ticket.every((num) => num === ticket[0]);
    return ticket[0] === 0;
  };
  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}
