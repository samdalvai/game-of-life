import { Cell, Coordinates, CellMatrix } from "../types/game";

export const initializeCellMatrix = (rows: number, columns: number): CellMatrix => {
    const CellMatrix: CellMatrix = [];

    for (let i = 0; i < rows; i++) {
        const row: Cell[] = [];

        for (let j = 0; j < columns; j++) {
            row.push({ state: 'dead' });
        }

        CellMatrix.push(row);
    }

    return CellMatrix;
};

export const getCellMatrixAsString = (CellMatrix: CellMatrix): string => {
    let output = '';
    for (let i = 0; i < CellMatrix.length; i++) {
        output += '|';
        for (let j = 0; j < CellMatrix[0].length; j++) {
            output += (CellMatrix[i][j].state === 'alive' ? 'X' : ' ') + '|';
        }
        output += '\n';
    }

    return output;
};

export const printCellMatrix = (CellMatrix: CellMatrix): void => {
    console.log(getCellMatrixAsString(CellMatrix));
};

export const getCellByCoordinates = (CellMatrix: CellMatrix, coordinates: Coordinates): Cell | null => {
    if (coordinates.xAxis < 0 || coordinates.xAxis > CellMatrix.length - 1) {
        return null;
    }

    if (coordinates.yAxis < 0 || coordinates.yAxis > CellMatrix[0].length - 1) {
        return null;
    }

    return CellMatrix[coordinates.xAxis][coordinates.yAxis];
};

export const getCellNeighbours = (CellMatrix: CellMatrix, coordinates: Coordinates): Cell[] => {
    const neighbours: Cell[] = [];
    const { xAxis, yAxis } = coordinates;

    for (let i = xAxis - 1; i <= xAxis + 1; i++) {
        for (let j = yAxis - 1; j <= yAxis + 1; j++) {
            if (!(i === xAxis && j === yAxis)) {
                const neighbour: Cell | null = getCellByCoordinates(CellMatrix, { xAxis: i, yAxis: j });
                if (neighbour) {
                    neighbours.push(neighbour);
                }
            }
        }
    }

    return neighbours;
};

export const getCellNeighboursAliveCount = (CellMatrix: CellMatrix, cellCoordinates: Coordinates): number => {
    let neighboursAliveCount = 0;

    const { xAxis, yAxis } = cellCoordinates;

    for (let i = xAxis - 1; i <= xAxis + 1; i++) {
        for (let j = yAxis - 1; j <= yAxis + 1; j++) {
            if (!(i === xAxis && j === yAxis)) {
                const neighbour: Cell | null = getCellByCoordinates(CellMatrix, { xAxis: i, yAxis: j });
                if (neighbour?.state === 'alive') {
                    neighboursAliveCount++;
                }
            }
        }
    }

    return neighboursAliveCount;
};