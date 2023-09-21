import { Cell, CellState, GameBoard } from "../types/game";
import { getCellNeighboursAliveCount } from "./game";

export const getCellNextState = (gameBoard: GameBoard, cell: Cell): CellState => {
    const aliveNeighboursCount = getCellNeighboursAliveCount(gameBoard, cell);

    //Any live cell with two or three live neighbours lives on to the next generation.
    if (cell.state === 'alive' && aliveNeighboursCount === 2 || aliveNeighboursCount === 3) {
        return 'alive';
    }

    //Any live cell with more than three live neighbours dies, as if by overpopulation.
    if (cell.state === 'alive' && aliveNeighboursCount > 3) {
        return 'dead';
    }

    //Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
    if (cell.state === 'dead' && aliveNeighboursCount === 3) {
        return 'alive';
    }

    return 'dead';
};

export const getNextBoardState = (currentGameBoard: GameBoard): GameBoard => {
    const nextGameBoard: GameBoard = [];

    for (let i = 0; i < currentGameBoard.length; i++) {
        const row = [];

        for (let j = 0; j < currentGameBoard[0].length; j++) {
            const currentCell: Cell = currentGameBoard[i][j];
            const nextCellState: CellState = getCellNextState(currentGameBoard, currentCell);

            if (currentCell.state !== nextCellState) {
                row.push({ ...currentCell, state: nextCellState });
            } else {
                row.push({ ...currentCell });
            }
        }

        nextGameBoard.push(row);
    }

    return nextGameBoard;
};