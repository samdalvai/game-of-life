import { useState } from 'react';
import { CellMatrix, CellState, Coordinates } from '../types/game';
import { initializeCellMatrix } from '../core/game';
import { getNextCellMatrixState } from '../core/rules';
import TimedCounter from './TimedCounter';
import CellMatrixField from './CellMatrixField';
import ZoomableWindow from './ZoomableWindow';
import GameBoardMenu from './GameBoardMenu';

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
        <GameBoardMenu
            gameRunning={false}
            onRun={handleRunGame}
            onReset={handleResetState}
            onNext={handleGetNextState}
            onRandomize={handleRandomizeState} />
        {gameRunning && <TimedCounter interval={100} onCount={handleGetNextState} />}
    </div >;
};

export default GameBoard;