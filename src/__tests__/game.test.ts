import { expect, test } from 'vitest';
import { initializeCellMatrix, initializeCell, getCellByCoordinates, getCellNeighbours, getCellNeighboursAliveCount } from "../core/game";
import { Cell, CellMatrix } from '../types/game';

test('Should initialize a dead cell', () => {
    const expectedCell: Cell = { state: 'dead', coordinates: { xAxis: 0, yAxis: 0 } };
    expect(initializeCell('dead', { xAxis: 0, yAxis: 0 })).toEqual(expectedCell);
});

test('Should initialize an alive cell', () => {
    const expectedCell: Cell = { state: 'alive', coordinates: { xAxis: 0, yAxis: 0 } };
    expect(initializeCell('alive', { xAxis: 0, yAxis: 0 })).toEqual(expectedCell);
});

test('Should initialize a 2x2 game cell matrix with dead cells', () => {
    const expectedCell: Cell = { state: 'dead', coordinates: { xAxis: 0, yAxis: 0 } };
    const expectedCellMatrix: CellMatrix = [
        [
            { ...expectedCell, coordinates: { xAxis: 0, yAxis: 0 } },
            { ...expectedCell, coordinates: { xAxis: 0, yAxis: 1 } }
        ],
        [
            { ...expectedCell, coordinates: { xAxis: 1, yAxis: 0 } },
            { ...expectedCell, coordinates: { xAxis: 1, yAxis: 1 } }
        ]
    ];
    expect(initializeCellMatrix(2, 2)).toEqual(expectedCellMatrix);
});

test('Should retrieve the cell with coordinates x: 0 and y: 0', () => {
    const CellMatrix: CellMatrix = initializeCellMatrix(2, 2);
    const expectedCell: Cell = { state: 'dead', coordinates: { xAxis: 0, yAxis: 0 } };
    expect(getCellByCoordinates(CellMatrix, { xAxis: 0, yAxis: 0 })).toEqual(expectedCell);
});

test('Should return null if for the given coordinates there is no cell', () => {
    const CellMatrix: CellMatrix = initializeCellMatrix(2, 2);
    expect(getCellByCoordinates(CellMatrix, { xAxis: 3, yAxis: 0 })).toEqual(null);
    expect(getCellByCoordinates(CellMatrix, { xAxis: 0, yAxis: 3 })).toEqual(null);
    expect(getCellByCoordinates(CellMatrix, { xAxis: 3, yAxis: 3 })).toEqual(null);
});

test('Should return the neighbours of a cell with 8 neighbours', () => {
    const CellMatrix: CellMatrix = initializeCellMatrix(3, 3);
    const cellNeighbours: Cell[] = [
        { state: 'dead', coordinates: { xAxis: 0, yAxis: 0 } },
        { state: 'dead', coordinates: { xAxis: 0, yAxis: 1 } },
        { state: 'dead', coordinates: { xAxis: 0, yAxis: 2 } },
        { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
        { state: 'dead', coordinates: { xAxis: 1, yAxis: 2 } },
        { state: 'dead', coordinates: { xAxis: 2, yAxis: 0 } },
        { state: 'dead', coordinates: { xAxis: 2, yAxis: 1 } },
        { state: 'dead', coordinates: { xAxis: 2, yAxis: 2 } }
    ];
    expect(getCellNeighbours(CellMatrix, { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } })).toEqual(cellNeighbours);
});

test('Should return the neighbours of a cell with 3 neighbours for a cell in the upper left corner with 4 cells on the cell matrix', () => {
    const CellMatrix: CellMatrix = initializeCellMatrix(2, 2);
    const cellNeighbours: Cell[] = [
        { state: 'dead', coordinates: { xAxis: 0, yAxis: 1 } },
        { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
        { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } }
    ];
    expect(getCellNeighbours(CellMatrix, { state: 'dead', coordinates: { xAxis: 0, yAxis: 0 } })).toEqual(cellNeighbours);
});

test('Should return the neighbours of a cell with 3 neighbours for a cell in the upper left corner with 9 cells on the cell matrix', () => {
    const CellMatrix: CellMatrix = initializeCellMatrix(3, 3);
    const cellNeighbours: Cell[] = [
        { state: 'dead', coordinates: { xAxis: 0, yAxis: 1 } },
        { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
        { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
    ];
    expect(getCellNeighbours(CellMatrix, { state: 'dead', coordinates: { xAxis: 0, yAxis: 0 } })).toEqual(cellNeighbours);
});

test('Should return the neighbours of a cell with 5 neighbours for a cell in the upper border with 9 cells on the cell matrix', () => {
    const CellMatrix: CellMatrix = initializeCellMatrix(3, 3);
    const cellNeighbours: Cell[] = [
        { state: 'dead', coordinates: { xAxis: 0, yAxis: 0 } },
        { state: 'dead', coordinates: { xAxis: 0, yAxis: 2 } },
        { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
        { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
        { state: 'dead', coordinates: { xAxis: 1, yAxis: 2 } },
    ];
    expect(getCellNeighbours(CellMatrix, { state: 'dead', coordinates: { xAxis: 0, yAxis: 1 } })).toEqual(cellNeighbours);
});

test('Should return the neighbours of a cell with 3 neighbours for a cell in the upper right corner', () => {
    const CellMatrix: CellMatrix = initializeCellMatrix(2, 2);
    const cellNeighbours: Cell[] = [
        { state: 'dead', coordinates: { xAxis: 0, yAxis: 0 } },
        { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
        { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } }
    ];
    expect(getCellNeighbours(CellMatrix, { state: 'dead', coordinates: { xAxis: 0, yAxis: 1 } })).toEqual(cellNeighbours);
});

test('Should return the neighbours of a cell with 3 neighbours for a cell in the bottom left corner', () => {
    const CellMatrix: CellMatrix = initializeCellMatrix(2, 2);
    const cellNeighbours: Cell[] = [
        { state: 'dead', coordinates: { xAxis: 0, yAxis: 0 } },
        { state: 'dead', coordinates: { xAxis: 0, yAxis: 1 } },
        { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } }
    ];
    expect(getCellNeighbours(CellMatrix, { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } })).toEqual(cellNeighbours);
});

test('Should return the neighbours of a cell with 3 neighbours for a cell in the bottom right corner', () => {
    const CellMatrix: CellMatrix = initializeCellMatrix(2, 2);
    const cellNeighbours: Cell[] = [
        { state: 'dead', coordinates: { xAxis: 0, yAxis: 0 } },
        { state: 'dead', coordinates: { xAxis: 0, yAxis: 1 } },
        { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } }
    ];
    expect(getCellNeighbours(CellMatrix, { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } })).toEqual(cellNeighbours);
});

test('Should return the neighbours of a cell with 3 neighbours for a cell in the bottom right corner with 9 cells on the cell matrix', () => {
    const CellMatrix: CellMatrix = initializeCellMatrix(3, 3);
    const cellNeighbours: Cell[] = [
        { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
        { state: 'dead', coordinates: { xAxis: 1, yAxis: 2 } },
        { state: 'dead', coordinates: { xAxis: 2, yAxis: 1 } },
    ];
    expect(getCellNeighbours(CellMatrix, { state: 'dead', coordinates: { xAxis: 2, yAxis: 2 } })).toEqual(cellNeighbours);
});

test('Should return the neighbours of a cell with 5 neighbours for a cell in the bottom border with 9 cells on the cell matrix', () => {
    const CellMatrix: CellMatrix = initializeCellMatrix(3, 3);
    const cellNeighbours: Cell[] = [
        { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
        { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
        { state: 'dead', coordinates: { xAxis: 1, yAxis: 2 } },
        { state: 'dead', coordinates: { xAxis: 2, yAxis: 0 } },
        { state: 'dead', coordinates: { xAxis: 2, yAxis: 2 } },
    ];
    expect(getCellNeighbours(CellMatrix, { state: 'dead', coordinates: { xAxis: 2, yAxis: 1 } })).toEqual(cellNeighbours);
});

test('Should return the number of alive cells that are neighbour to a cell with 8 alive neighbours', () => {
    const CellMatrix: CellMatrix = [
        [
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 0 } },
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 2 } }
        ],
        [
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 2 } }
        ],
        [
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 2 } }
        ]
    ];
    expect(getCellNeighboursAliveCount(CellMatrix, { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } })).toEqual(8);
});

test('Should return the number of alive cells that are neighbour to a cell with 3 alive neighbours', () => {
    const CellMatrix: CellMatrix = [
        [
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 2 } }
        ],
        [
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 2 } }
        ],
        [
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 2 } }
        ]
    ];
    expect(getCellNeighboursAliveCount(CellMatrix, { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } })).toEqual(3);
});

test('Should return the number of alive cells that are neighbour to a cell with no alive neighbours', () => {
    const CellMatrix: CellMatrix = [
        [
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 2 } }
        ],
        [
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 2 } }
        ],
        [
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 2 } }
        ]
    ];
    expect(getCellNeighboursAliveCount(CellMatrix, { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } })).toEqual(0);
});

test('Should return the number of alive cells that are neighbour to a cell which lies at the border of the game cell matrix with 3 alive neighbours', () => {
    const CellMatrix: CellMatrix = [
        [
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 0 } },
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 1 } },
        ],
        [
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
        ]
    ];
    expect(getCellNeighboursAliveCount(CellMatrix, { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } })).toEqual(3);
});

test('Should return the number of alive cells that are neighbour to a cell which lies at the border of the game cell matrix with no alive neighbours', () => {
    const CellMatrix: CellMatrix = [
        [
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 0 } },
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 1 } },
        ],
        [
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
        ]
    ];
    expect(getCellNeighboursAliveCount(CellMatrix, { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } })).toEqual(3);
});
