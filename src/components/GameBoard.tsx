import { useState } from 'react';
import { CellMatrix, CellState, Coordinates } from '../types/game';
import { initializeCellMatrix } from '../core/game';
import { getNextCellMatrixState } from '../core/rules';
import TimedCounter from './TimedCounter';
import CellMatrixField from './CellMatrixField';
import Button from './Button';
import ZoomableWindow from './ZoomableWindow';
import { DeleteIcon, NextIcon, PauseIcon, PlayIcon, UpdateIcon } from '../icons/Icons';

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

    const handleRunGame = () => {
        setGameRunning((current) => !current);
    };

    const handleResetState = () => {
        setCellMatrix(initializeCellMatrix(rows, columns));
        setGameRunning(false);
    };

    const handleGetNextState = () => {
        setCellMatrix((current) => getNextCellMatrixState(current));
    };

    const handleRandomizeState = () => {
        setCellMatrix(initializeCellMatrix(rows, columns, true));
    };

    return <div className="w-full h-full xl:w-2/3 flex flex-col justify-center bg-white">
        <ZoomableWindow>
            <CellMatrixField cellMatrix={cellMatrix} onCellClick={handleCellClick} />
        </ZoomableWindow>
        <div className="pt-3 w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex md:pe-1">
                <div className="pe-1 w-1/2">
                    <Button
                        text={!gameRunning ? 'Run game' : 'Stop game'}
                        icon={!gameRunning ? <PlayIcon /> : <PauseIcon />}
                        color={!gameRunning ? 'green' : 'red'}
                        onClick={handleRunGame}
                    />
                </div>
                <div className="ps-1 w-1/2">
                    <Button
                        text="Reset"
                        icon={<DeleteIcon />}
                        color="gray"
                        onClick={handleResetState}
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 flex pt-2 md:ps-1 md:pt-0">
                <div className="pe-1 w-1/2">
                    <Button
                        text="Get next state"
                        icon={<NextIcon />}
                        color="blue"
                        onClick={handleGetNextState}
                    />
                </div>
                <div className="ps-1 w-1/2">
                    <Button
                        text="Randomize"
                        icon={<UpdateIcon />}
                        color="indigo"
                        onClick={handleRandomizeState}
                    />
                </div>
            </div>
        </div>
        {gameRunning && <TimedCounter interval={100} onCount={handleGetNextState} />}
    </div >;
};

export default GameBoard;