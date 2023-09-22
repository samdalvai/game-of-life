import { Cell, CellState, CellMatrix } from "../types/game";
import { getCellNeighboursAliveCount } from "./game";

export const getCellNextState = (CellMatrix: CellMatrix, cell: Cell): CellState => {
    const aliveNeighboursCount = getCellNeighboursAliveCount(CellMatrix, cell);

    // Rule 1: Any live cell with two or three live neighbours lives on to the next generation.
    if (cell.state === 'alive' && aliveNeighboursCount === 2 || aliveNeighboursCount === 3) {
        return 'alive';
    }

    // Rule 2: Any live cell with more than three live neighbours dies, as if by overpopulation.
    if (cell.state === 'alive' && aliveNeighboursCount > 3) {
        return 'dead';
    }

    // Rule 3: Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
    if (cell.state === 'dead' && aliveNeighboursCount === 3) {
        return 'alive';
    }

    return 'dead';
};

export const getNextCellMatrixState = (currentCellMatrix: CellMatrix): CellMatrix => {
    const nextCellMatrix: CellMatrix = [];

    for (let i = 0; i < currentCellMatrix.length; i++) {
        const row = [];

        for (let j = 0; j < currentCellMatrix[0].length; j++) {
            const currentCell: Cell = currentCellMatrix[i][j];
            const nextCellState: CellState = getCellNextState(currentCellMatrix, currentCell);

            if (currentCell.state !== nextCellState) {
                row.push({ ...currentCell, state: nextCellState });
            } else {
                row.push({ ...currentCell });
            }
        }

        nextCellMatrix.push(row);
    }

    return nextCellMatrix;
};