import { expect, test } from 'vitest';
import { initializeCellMatrix, getCellByCoordinates, getCellNeighboursAliveCount } from '../core/game';
import { Cell, CellMatrix } from '../types/game';

test('Should initialize a dead cell', () => {
    const expectedCell: Cell = { state: 'dead' };
    expect({ state: 'dead' }).toEqual(expectedCell);
});

test('Should initialize an alive cell', () => {
    const expectedCell: Cell = { state: 'alive' };
    expect({ state: 'alive' }).toEqual(expectedCell);
});

test('Should initialize a 2x2 game cell matrix with dead cells', () => {
    const expectedCell: Cell = { state: 'dead' };
    const expectedCellMatrix: CellMatrix = [
        [
            { ...expectedCell },
            { ...expectedCell }
        ],
        [
            { ...expectedCell },
            { ...expectedCell }
        ]
    ];
    expect(initializeCellMatrix(2, 2)).toEqual(expectedCellMatrix);
});

test('Should retrieve the cell with coordinates x: 0 and y: 0', () => {
    const CellMatrix: CellMatrix = initializeCellMatrix(2, 2);
    const expectedCell: Cell = { state: 'dead' };
    expect(getCellByCoordinates(CellMatrix, { xAxis: 0, yAxis: 0 })).toEqual(expectedCell);
});

test('Should return null if for the given coordinates there is no cell', () => {
    const CellMatrix: CellMatrix = initializeCellMatrix(2, 2);
    expect(getCellByCoordinates(CellMatrix, { xAxis: 3, yAxis: 0 })).toEqual(null);
    expect(getCellByCoordinates(CellMatrix, { xAxis: 0, yAxis: 3 })).toEqual(null);
    expect(getCellByCoordinates(CellMatrix, { xAxis: 3, yAxis: 3 })).toEqual(null);
});

test('Should return the number of alive cells that are neighbour to a cell with 8 alive neighbours', () => {
    const CellMatrix: CellMatrix = [
        [
            { state: 'alive' },
            { state: 'alive' },
            { state: 'alive' }
        ],
        [
            { state: 'alive' },
            { state: 'dead' },
            { state: 'alive' }
        ],
        [
            { state: 'alive' },
            { state: 'alive' },
            { state: 'alive' }
        ]
    ];
    expect(getCellNeighboursAliveCount(CellMatrix, { xAxis: 1, yAxis: 1 })).toEqual(8);
});

test('Should return the number of alive cells that are neighbour to a cell with 3 alive neighbours', () => {
    const CellMatrix: CellMatrix = [
        [
            { state: 'alive' },
            { state: 'dead' },
            { state: 'dead' }
        ],
        [
            { state: 'dead' },
            { state: 'dead' },
            { state: 'alive' }
        ],
        [
            { state: 'dead' },
            { state: 'dead' },
            { state: 'alive' }
        ]
    ];
    expect(getCellNeighboursAliveCount(CellMatrix, { xAxis: 1, yAxis: 1 })).toEqual(3);
});

test('Should return the number of alive cells that are neighbour to a cell with no alive neighbours', () => {
    const CellMatrix: CellMatrix = [
        [
            { state: 'dead' },
            { state: 'dead' },
            { state: 'dead' }
        ],
        [
            { state: 'dead' },
            { state: 'dead' },
            { state: 'dead' }
        ],
        [
            { state: 'dead' },
            { state: 'dead' },
            { state: 'dead' }
        ]
    ];
    expect(getCellNeighboursAliveCount(CellMatrix, { xAxis: 1, yAxis: 1 })).toEqual(0);
});

test('Should return the number of alive cells that are neighbour to a cell which lies at the border of the game cell matrix with 3 alive neighbours', () => {
    const CellMatrix: CellMatrix = [
        [
            { state: 'alive' },
            { state: 'alive' },
        ],
        [
            { state: 'alive' },
            { state: 'dead' },
        ]
    ];
    expect(getCellNeighboursAliveCount(CellMatrix, { xAxis: 1, yAxis: 1 })).toEqual(3);
});

test('Should return the number of alive cells that are neighbour to a cell which lies at the border of the game cell matrix with no alive neighbours', () => {
    const CellMatrix: CellMatrix = [
        [
            { state: 'alive' },
            { state: 'alive' },
        ],
        [
            { state: 'alive' },
            { state: 'dead' },
        ]
    ];
    expect(getCellNeighboursAliveCount(CellMatrix, { xAxis: 1, yAxis: 1 })).toEqual(3);
});
