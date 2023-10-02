import { Cell, CellState, CellMatrix, Coordinates } from '../types/game';
import { getCellNeighboursAliveCount } from './game';

export const getCellNextState = (cellMatrix: CellMatrix, currentCellState: CellState, cellCoordinates: Coordinates, infiniteBoard: boolean = false): CellState => {
    const aliveNeighboursCount = getCellNeighboursAliveCount(cellMatrix, cellCoordinates, infiniteBoard);

    // Rule 1: Any live cell with two or three live neighbours lives on to the next generation.
    if (currentCellState === 'alive' && aliveNeighboursCount === 2 || aliveNeighboursCount === 3) {
        return 'alive';
    }

    // Rule 2: Any live cell with more than three live neighbours dies, as if by overpopulation.
    if (currentCellState === 'alive' && aliveNeighboursCount > 3) {
        return 'dead';
    }

    // Rule 3: Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
    if (currentCellState === 'dead' && aliveNeighboursCount === 3) {
        return 'alive';
    }

    return 'dead';
};

export const getNextCellMatrixState = (currentCellMatrix: CellMatrix, infiniteBoard: boolean = false): CellMatrix => {
    const nextCellMatrix: CellMatrix = [];

    for (let i = 0; i < currentCellMatrix.length; i++) {
        const row = [];

        for (let j = 0; j < currentCellMatrix[0].length; j++) {
            const currentCellState: CellState = currentCellMatrix[i][j].state;
            const nextCellState: CellState = getCellNextState(currentCellMatrix, currentCellState, { xAxis: i, yAxis: j }, infiniteBoard);

            if (currentCellState !== nextCellState) {
                row.push({ state: nextCellState });
            } else {
                row.push({ state: currentCellState });
            }
        }

        nextCellMatrix.push(row);
    }

    return nextCellMatrix;
};