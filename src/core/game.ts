import { Cell, CellState, Coordinates, GameBoard } from "../types/game"

export const initializeBoard = (rows: number, columns: number): GameBoard => {
    const gameBoard: GameBoard = [];

    for (let i = 0; i < rows; i++) {
        const row = [];

        for (let j = 0; j < columns; j++) {
            row.push(initializeCell('dead', { xAxis: i, yAxis: j }));
        }

        gameBoard.push(row);
    }

    return gameBoard;
}

export const initializeCell = (initialState: CellState, coordinates: Coordinates): Cell => {
    return { state: initialState, coordinates: coordinates };
}

export const getCellByCoordinates = (gameBoard: GameBoard, coordinates: Coordinates): Cell | null => {
    return { ...gameBoard[coordinates.xAxis][coordinates.yAxis] }
}

/*
Game rules
Any live cell with two or three live neighbours lives on to the next generation. Any live cell with more than three live neighbours dies, as if by overpopulation. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.*/