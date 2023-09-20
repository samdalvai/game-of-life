import { Cell, CellState, Coordinates } from "../types/cell"

export const initializeBoard = (rows: number, columns: number): Cell[][] => {
    const gameBoard = [];

    for (let i = 0; i < rows; i++) {
        const row = [];

        for (let j = 0; j < columns; j++) {
            row.push(initializeCell('dead', { xAxis: i, yAxis: j})); 
        }

        gameBoard.push(row);
    }

    console.log(gameBoard)

    return gameBoard;
}

export const initializeCell = (initialState: CellState, coordinates: Coordinates): Cell => {
    return { state: initialState, coordinates: coordinates };
} 