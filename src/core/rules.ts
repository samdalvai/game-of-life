import { Cell, CellState, CellMatrix, Coordinates } from '../types/game';
import { getCellNeighboursAliveCount } from './game';

export const getCellNextState = (cellMatrix: CellMatrix, currentCell: Cell, cellCoordinates: Coordinates, infiniteBoard: boolean = false): CellState => {
    const aliveNeighboursCount = getCellNeighboursAliveCount(cellMatrix, cellCoordinates, infiniteBoard);

    // Rule 1: Any live cell with two or three live neighbours lives on to the next generation.
    if (currentCell.state === 'alive' && aliveNeighboursCount === 2 || aliveNeighboursCount === 3) {
        return 'alive';
    }

    // Rule 2: Any live cell with more than three live neighbours dies, as if by overpopulation.
    if (currentCell.state === 'alive' && aliveNeighboursCount > 3) {
        return 'dead';
    }

    // Rule 3: Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
    if (currentCell.state === 'dead' && aliveNeighboursCount === 3) {
        return 'alive';
    }

    return 'dead';
};

export const getNextCellMatrixState = (currentCellMatrix: CellMatrix, infiniteBoard: boolean = false): CellMatrix => {
    const nextCellMatrix: CellMatrix = [];

    for (let i = 0; i < currentCellMatrix.length; i++) {
        const row = [];

        for (let j = 0; j < currentCellMatrix[0].length; j++) {
            const currentCell: Cell = currentCellMatrix[i][j];
            const nextCellState: CellState = getCellNextState(currentCellMatrix, currentCell, { xAxis: i, yAxis: j }, infiniteBoard);

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