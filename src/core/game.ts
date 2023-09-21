import { Cell, CellState, Coordinates, GameBoard } from "../types/game";

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
};

export const initializeCell = (initialState: CellState, coordinates: Coordinates): Cell => {
    return { state: initialState, coordinates: coordinates };
};

export const getCellByCoordinates = (gameBoard: GameBoard, coordinates: Coordinates): Cell | null => {
    if (coordinates.xAxis < 0 || coordinates.xAxis > gameBoard.length - 1) {
        return null;
    }

    if (coordinates.yAxis < 0 || coordinates.yAxis > gameBoard[0].length - 1) {
        return null;
    }

    return { ...gameBoard[coordinates.xAxis][coordinates.yAxis] };
};

export const getCellNeighbours = (gameBoard: GameBoard, cell: Cell): Cell[] => {
    const neighbors: Cell[] = [];
    const { xAxis, yAxis } = cell.coordinates;

    for (let i = xAxis - 1; i <= xAxis + 1; i++) {
        for (let j = yAxis - 1; j <= yAxis + 1; j++) {
            const neighbor: Cell | null = getCellByCoordinates(gameBoard, { xAxis: i, yAxis: j });
            if (neighbor && !(xAxis === i && yAxis === j)) {
                neighbors.push(neighbor);
            }
        }
    }

    return neighbors;
};

export const getCellNeighboursAliveCount = (gameBoard: GameBoard, cell: Cell): number => {
    const neighbors: Cell[] = getCellNeighbours(gameBoard, cell);

    return neighbors.reduce((acc, cell) => acc + (cell.state === 'alive' ? 1 : 0), 0);
};

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

