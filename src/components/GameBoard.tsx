import { useState } from "react";
import { Cell, CellMatrix, CellState } from "../types/game";
import { initializeCellMatrix } from "../core/game";
import CellSquare from "./CellSquare";

const GameBoard = ({ rows, columns }: { rows: number, columns: number }) => {
    const [cellMatrix, setCellMatrix] = useState<CellMatrix>(initializeCellMatrix(rows, columns));

    const handleCellClick = (cell: Cell) => {
        const nextState: CellState = cell.state === 'alive' ? 'dead' : 'alive';
        const { xAxis, yAxis } = cell.coordinates;

        const updatedCellMatrix: CellMatrix = { ...cellMatrix };
        updatedCellMatrix[xAxis][yAxis].state = nextState;

        setCellMatrix(updatedCellMatrix);
    };

    return <>
        {
            cellMatrix.map((cellRow: Cell[], index: number) => <div key={'row-' + index} className="flex">
                    {
                        cellRow.map((cell: Cell) => {
                        const { xAxis, yAxis } = cell.coordinates; 
                        return <div key={'cell-' + xAxis + yAxis}>{cell.state}</div>;
                    })
                    }
                </div>
                /*return <div className="flex">{
                    cellRow.map((cell: Cell) => <CellSquare cell={cell} onClick={() => handleCellClick(cell)} />)
                }</div>;*/
            )
        }
    </>;
}

export default GameBoard;