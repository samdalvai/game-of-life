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

export const getGameboardAsString = (gameBoard: GameBoard): string => {
    let output = '';
    for (let i = 0; i < gameBoard.length; i++) {
        output += '|';
        for (let j = 0; j < gameBoard[0].length; j++) {
            output += (gameBoard[i][j].state === 'alive' ? 'X' : ' ') + '|';
        }
        output += '\n';
    }

    return output;
};

export const printGameboard = (gameBoard: GameBoard): void => {
    console.log(getGameboardAsString(gameBoard));
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