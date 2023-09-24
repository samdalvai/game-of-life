import { useState } from "react";
import { Cell, CellMatrix, CellState } from "../types/game";
import { initializeCellMatrix } from "../core/game";
import { getNextCellMatrixState } from "../core/rules";
import TimedCounter from "./TimedCounter";
import CellMatrixField from "./CellMatrixField";
import Button from "./Button";

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
        setGameRunning(false);
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

                        <Button text="Run game" color="green" onClick={handleRunGame} />
                        :
                        <Button text="Stio game" color="red" onClick={handleRunGame} />
                }
            </div>
            <div className="px-1 w-full">
                <Button text="Reset" color="gray" onClick={handleResetState} />
            </div>
            <div className="ps-1 w-full">
                <Button text="Get next state" color="blue" onClick={handleGetNextState} />
            </div>
        </div>
        {gameRunning && <TimedCounter interval={250} onCount={handleGetNextState} />}
    </div>;
};

export default GameBoard;