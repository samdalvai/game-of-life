import { useState } from "react";
import { Cell, CellMatrix } from "../types/game";
import { initializeCellMatrix } from "../core/game";
import CellSquare from "./CellSquare";

const GameBoard = ({ rows, columns }: { rows: number, columns: number }) => {
    const [cellMatrix, setCellMatrix] = useState<CellMatrix>(initializeCellMatrix(rows, columns));

    const handleCellClick = (cell: Cell) => {
        const nextState: CellState = cell.state === 'alive' ? 'dead' : 'alive';

        
    };

    return <>
        {
            cellMatrix.map((cellRow: Cell[]) => {
                console.log(cellRow)
                return <div className="flex">{
                    cellRow.map((cell: Cell) => <CellSquare cell={cell} onClick={() => handleCellClick(cell)} />)
                }</div>;
            })
        }
    </>;
}

export default GameBoard;