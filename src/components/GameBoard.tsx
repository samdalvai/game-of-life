import { useState } from "react";
import { Cell, CellMatrix, CellState } from "../types/game";
import { initializeCellMatrix } from "../core/game";
import { getNextCellMatrixState } from "../core/rules";
import TimedCounter from "./TimedCounter";
import CellMatrixField from "./CellMatrix";

const GameBoard = ({ rows, columns }: { rows: number, columns: number }) => {
    const [cellMatrix, setCellMatrix] = useState<CellMatrix>(initializeCellMatrix(rows, columns));
    const [gameRunning, setGameRunning] = useState<boolean>(false);

    const handleCellClick = (cell: Cell) => {
        const nextState: CellState = cell.state === 'alive' ? 'dead' : 'alive';
        const { xAxis, yAxis } = cell.coordinates;

        const updatedCellMatrix: CellMatrix = [...cellMatrix];
        updatedCellMatrix[xAxis][yAxis].state = nextState;

        setCellMatrix(updatedCellMatrix);
    };

    const handleGetNextState = () => {
        setCellMatrix((current) => getNextCellMatrixState(current));
    };

    const handleResetState = () => {
        setCellMatrix(initializeCellMatrix(rows, columns));
    };

    const handleRunGame = () => {
        setGameRunning((current) => !current);
    };

    return <div className="w-full flex flex-col justify-center">
        <CellMatrixField cellMatrix={cellMatrix} onCellClick={handleCellClick} />
        <div className="py-3 w-full flex justify-between">
            <div className="pe-1 w-full">
                {
                    !gameRunning ?
                        <button className="px-4 py-2 w-full bg-green-700 text-white rounded hover:bg-green-800" onClick={handleRunGame}>
                            Run game
                        </button>
                        :
                        <button className="px-4 py-2 w-full bg-red-500 text-white rounded hover:bg-red-600" onClick={handleRunGame}>
                            Stop game
                        </button>
                }
            </div>
            <div className="px-1 w-full">
                <button className="px-4 py-2 w-full bg-gray-500 text-white rounded hover:bg-gray-600" onClick={handleResetState}>
                    Reset
                </button>
            </div>
            <div className="ps-1 w-full">
                <button className="px-4 py-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleGetNextState}>
                    Get next state
                </button>
            </div>
        </div>
        {gameRunning && <TimedCounter interval={250} onCount={handleGetNextState} />}
    </div>;
};

export default GameBoard;