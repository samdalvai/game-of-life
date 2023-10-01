import { Cell, Coordinates, CellMatrix, CellState } from '../types/game';

export const initializeCellMatrix = (rows: number, columns: number, random: boolean = false): CellMatrix => {
    const cellMatrix: CellMatrix = [];

    for (let i = 0; i < rows; i++) {
        const row: Cell[] = [];

        for (let j = 0; j < columns; j++) {
            row.push({ state: !random ? 'dead' : getRandomState() });
        }

        cellMatrix.push(row);
    }

    return cellMatrix;
};

const getRandomState = (): CellState => {
    return Math.round(Math.random()) % 2 === 0 ? 'dead' : 'alive';
};

export const getCellByCoordinates = (cellMatrix: CellMatrix, coordinates: Coordinates, infiniteBoard: boolean = false): Cell | null => {
    if (coordinates.xAxis < 0 || coordinates.xAxis > cellMatrix.length - 1) {
        return null;
    }

    if (coordinates.yAxis < 0 || coordinates.yAxis > cellMatrix[0].length - 1) {
        return null;
    }

    return cellMatrix[coordinates.xAxis][coordinates.yAxis];
};

export const getCellNeighboursAliveCount = (cellMatrix: CellMatrix, cellCoordinates: Coordinates, infiniteBoard: boolean = false): number => {
    let neighboursAliveCount = 0;

    const { xAxis, yAxis } = cellCoordinates;

    for (let i = xAxis - 1; i <= xAxis + 1; i++) {
        for (let j = yAxis - 1; j <= yAxis + 1; j++) {
            if (!(i === xAxis && j === yAxis)) {
                const neighbour: Cell | null = getCellByCoordinates(cellMatrix, { xAxis: i, yAxis: j }, infiniteBoard);
                if (neighbour?.state === 'alive') {
                    neighboursAliveCount++;
                }
            }
        }
    }

    return neighboursAliveCount;
};

export const getCellMatrixAsString = (cellMatrix: CellMatrix): string => {
    let output = '';
    for (let i = 0; i < cellMatrix.length; i++) {
        output += '|';
        for (let j = 0; j < cellMatrix[0].length; j++) {
            output += (cellMatrix[i][j].state === 'alive' ? 'X' : ' ') + '|';
        }
        output += '\n';
    }

    return output;
};

export const printCellMatrix = (cellMatrix: CellMatrix): void => {
    console.log(getCellMatrixAsString(cellMatrix));
};