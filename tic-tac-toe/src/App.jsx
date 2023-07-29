import { useState } from "react";
import { Square } from "./components/Square";
import confetti from "canvas-confetti";
import { TURNS } from "./constants";
import { checkWinnerFrom, checkEndGame } from "./logic/board";
import WinnerModal from "./components/WinnerModal";
import { saveGameToStorage, resetGameToStorage } from "./logic/storage";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });
  const [winner, setWinner] = useState(null); // null es empat. False perdedor.

  // Reseteo del juego
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    // reseteamos partida en localStorage:
    resetGameToStorage();
  };

  // Controlamos acciones del board
  const updateBoard = (index) => {
    // Impedimos que juegue en cuadros ocupados:
    if (board[index] || winner) return;
    // Si juega en un cuadrado libre, mostramos la actualización:
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    // Nuevo turno para el usuario:
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // guardar partida en localStorage:
    saveGameToStorage({
      board: newBoard,
      turn: newTurn,
    });
    // Revisamos si hay ganador:
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkEndGame(newBoard)) {
      setWinner(false); // EMPATE
    }
  };
  return (
    <>
      <main className="text-white bg-neutral-600 rounded-lg py-4 px-4">
        <div className="flex items-center">
          <button className="" onClick={resetGame}>
            Reset
          </button>
          <h1 className="text-2xl font-bold flex-grow text-center mr-8">TicTacToe</h1>
        </div>

        {/*         seccion con renderizado global */}
        <section className="grid grid-cols-3 gap-2 mt-8 ">
          {board.map((value, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            );
          })}
        </section>
        {/* seccion con un renderizado por turno */}
        <section className="flex place-content-center gap-8 mt-6">
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>

        {/* seccion con un renderizado condicional */}
        <WinnerModal resetGame={resetGame} winner={winner} />
      </main>
    </>
  );
}

export default App;
