import { useState } from "react";
import CellSquare from "./components/CellSquare";
import { Cell, CellState } from "./types/game";

function App() {
  const [cell, setCell] = useState<Cell>({ state: 'alive', coordinates: { xAxis: 0, yAxis: 0 } });

  const handleCellClick = () => {
    const nextState: CellState = cell.state === 'alive' ? 'dead' : 'alive';

    setCell((current) => ({ ...current, state: nextState }));
  };

  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-center items-center p-2">
      <div className="flex">
        <CellSquare cell={cell} onClick={handleCellClick} />
        <CellSquare cell={cell} onClick={handleCellClick} />
      </div>
      <div className="flex">
        <CellSquare cell={cell} onClick={handleCellClick} />
        <CellSquare cell={cell} onClick={handleCellClick} />
      </div>
    </div >
  );
}

export default App;
