import { useState } from 'react';
import { initializeCellMatrix, getNextCellMatrixState, CellMatrix, CellState, Coordinates } from 'game-of-life-core';
import TimedCounter from '../core/TimedCounter';
import CellMatrixField from '../cells/CellMatrixField';
import ZoomableWindow from '../core/ZoomableWindow';
import GameBoardMenu from './GameBoardMenu';
import { CallBack } from '../../types/callbacks';

const GameBoard = ({ rows, columns, infiniteGameBoard, updateSpeed, onBack }: { rows: number, columns: number, infiniteGameBoard: boolean, updateSpeed: number, onBack: CallBack }) => {
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
        setCellMatrix((current) => getNextCellMatrixState(current, infiniteGameBoard));
    };

    const handleRandomizeState = () => {
        setCellMatrix(initializeCellMatrix(rows, columns, true));
    };

    return <div className="w-full h-screen py-2 xl:w-2/3 flex flex-col justify-center">
        <div className="flex justify-center">
            <h1 className="font-bold text-2xl py-3 text-blue-600">Game of Life</h1>
        </div>
        <ZoomableWindow zoomEnabled={!gameRunning}>
            <CellMatrixField cellMatrix={cellMatrix} onCellClick={handleCellClick} />
        </ZoomableWindow>
        <GameBoardMenu
            gameRunning={gameRunning}
            onRun={handleRunGame}
            onReset={handleResetState}
            onNext={handleGetNextState}
            onRandomize={handleRandomizeState} 
            onBack={onBack}
            />
        {gameRunning && <TimedCounter interval={updateSpeed} onCount={handleGetNextState} />}
    </div >;
};

export default GameBoard;