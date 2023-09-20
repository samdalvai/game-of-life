import { Cell, CellState, GameBoard } from "../types/cell"

export const initializeBoard = (rows: number, columns: number): GameBoard => {
    const gameBoard: GameBoard = [];

    for (let i = 0; i < rows; i++) {
        const row = [];

        for (let j = 0; j < columns; j++) {
            row.push(initializeCell('dead'));
        }

        gameBoard.push(row);
    }

    console.log(gameBoard)

    return gameBoard;
}

export const initializeCell = (initialState: CellState): Cell => {
    return { state: initialState };
} 