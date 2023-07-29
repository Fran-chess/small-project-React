import React from "react";
import { Square } from "./Square";

const WinnerModal = ({winner, resetGame}) => {
  if (winner === null) return null;

  const winnerText = winner === false ? 'Empater' : 'Ganó';
  return (
    <section>
      <h2>{winnerText}</h2>
      <header>{winner && <Square>{winner}</Square>}</header>
      <footer>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={resetGame}>Play again</button>
      </footer>
    </section>
  );
};

export default WinnerModal;
