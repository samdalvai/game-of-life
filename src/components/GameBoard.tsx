import { useState } from "react";
import { Cell, CellMatrix, CellState } from "../types/game";
import { initializeCellMatrix } from "../core/game";
import CellSquare from "./CellSquare";
import { getNextCellMatrixState } from "../core/rules";

const GameBoard = ({ rows, columns }: { rows: number, columns: number }) => {
    const [cellMatrix, setCellMatrix] = useState<CellMatrix>(initializeCellMatrix(rows, columns));

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

    return <>
        {
            cellMatrix.map((cellRow: Cell[], index: number) => <div key={'row-' + index} className="flex">
                {
                    cellRow.map((cell: Cell) => {
                        const { xAxis, yAxis } = cell.coordinates;
                        return <CellSquare
                            key={'cell-' + xAxis + yAxis}
                            cell={cell}
                            onClick={() => handleCellClick(cell)} />;
                    })
                }
            </div>)
        }
        <div className="py-2 w-72">
            <button className="px-4 py-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleGetNextState}>
                Get next state
            </button>
        </div>
    </>;
};

export default GameBoard;