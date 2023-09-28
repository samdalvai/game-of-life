import { useState } from "react";
import { CellMatrix, CellState, Coordinates } from "../types/game";
import { initializeCellMatrix } from "../core/game";
import { getNextCellMatrixState } from "../core/rules";
import TimedCounter from "./TimedCounter";
import CellMatrixField from "./CellMatrixField";
import Button from "./Button";
import ZoomableWindow from "./ZoomableWindow";

const GameBoard = ({ rows, columns }: { rows: number, columns: number }) => {
    const [cellMatrix, setCellMatrix] = useState<CellMatrix>(initializeCellMatrix(rows, columns));
    const [gameRunning, setGameRunning] = useState<boolean>(false);

    const handleCellClick = (coordinates: Coordinates) => {
        const { xAxis, yAxis } = coordinates;
        const nextState: CellState = cellMatrix[xAxis][yAxis].state === 'alive' ? 'dead' : 'alive';

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

    return <div className="w-full h-full xl:w-2/3 flex flex-col justify-center pt-5">
        <ZoomableWindow>
            <CellMatrixField cellMatrix={cellMatrix} onCellClick={handleCellClick} />
        </ZoomableWindow>
        <div className="py-3 w-full flex justify-between">
            <div className="pe-1 w-full">
                {
                    !gameRunning ?

                        <Button text="Run game" color="green" onClick={handleRunGame} />
                        :
                        <Button text="Stop game" color="red" onClick={handleRunGame} />
                }
            </div>
            <div className="px-1 w-full">
                <Button text="Reset" color="gray" onClick={handleResetState} />
            </div>
            <div className="ps-1 w-full">
                <Button text="Get next state" color="blue" onClick={handleGetNextState} />
            </div>
        </div>
        {gameRunning && <TimedCounter interval={10} onCount={handleGetNextState} />}
    </div>;
};

export default GameBoard;