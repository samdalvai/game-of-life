import { expect, test } from 'vitest';
import { getCellNextState, getNextCellMatrixState } from '../core/rules';
import { CellMatrix } from '../types/game';
import { initializeCellMatrix } from '../core/game';

test('(Rule 1) Any live cell with two live neighbours lives on to the next generation.', () => {
    const CellMatrix: CellMatrix = [
        [
            { state: 'alive' },
            { state: 'dead' },
            { state: 'dead' }
        ],
        [
            { state: 'dead' },
            { state: 'alive' },
            { state: 'dead' }
        ],
        [
            { state: 'dead' },
            { state: 'dead' },
            { state: 'alive' }
        ]
    ];
    expect(getCellNextState(CellMatrix, 'alive', { xAxis: 1, yAxis: 1 })).toEqual('alive');
});

test('(Rule 1) Any live cell with three live neighbours lives on to the next generation.', () => {
    const CellMatrix: CellMatrix = [
        [
            { state: 'alive' },
            { state: 'alive' },
            { state: 'dead' }
        ],
        [
            { state: 'dead' },
            { state: 'alive' },
            { state: 'dead' }
        ],
        [
            { state: 'dead' },
            { state: 'dead' },
            { state: 'alive' }
        ]
    ];
    expect(getCellNextState(CellMatrix, 'alive', { xAxis: 1, yAxis: 1 } )).toEqual('alive');
});

test('(Rule 2) Any live cell with more than three live neighbours dies, as if by overpopulation.', () => {
    const CellMatrix: CellMatrix = [
        [
            { state: 'alive' },
            { state: 'alive' },
            { state: 'alive' }
        ],
        [
            { state: 'dead' },
            { state: 'alive' },
            { state: 'dead' }
        ],
        [
            { state: 'dead' },
            { state: 'dead' },
            { state: 'alive' }
        ]
    ];
    expect(getCellNextState(CellMatrix, 'alive', { xAxis: 1, yAxis: 1 } )).toEqual('dead');
});

test('(Rule 3) Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.', () => {
    const CellMatrix: CellMatrix = [
        [
            { state: 'alive' },
            { state: 'dead' },
            { state: 'alive' }
        ],
        [
            { state: 'dead' },
            { state: 'dead' },
            { state: 'dead' }
        ],
        [
            { state: 'dead' },
            { state: 'dead' },
            { state: 'alive' }
        ]
    ];
    expect(getCellNextState(CellMatrix, 'dead', { xAxis: 1, yAxis: 1 } )).toEqual('alive');
});

test('Any dead cell with less than three live neighbours remains dead.', () => {
    const CellMatrix: CellMatrix = [
        [
            { state: 'dead' },
            { state: 'dead' },
            { state: 'alive' }
        ],
        [
            { state: 'dead' },
            { state: 'dead' },
            { state: 'dead' }
        ],
        [
            { state: 'dead' },
            { state: 'dead' },
            { state: 'alive' }
        ]
    ];
    expect(getCellNextState(CellMatrix, 'dead', { xAxis: 1, yAxis: 1 } )).toEqual('dead');
});

test('Any dead cell with more than three live neighbours remains dead.', () => {
    const CellMatrix: CellMatrix = [
        [
            { state: 'alive' },
            { state: 'dead' },
            { state: 'alive' }
        ],
        [
            { state: 'dead' },
            { state: 'dead' },
            { state: 'dead' }
        ],
        [
            { state: 'alive' },
            { state: 'dead' },
            { state: 'alive' }
        ]
    ];
    expect(getCellNextState(CellMatrix, 'dead', { xAxis: 1, yAxis: 1 } )).toEqual('dead');
});

test('A 2x2 CellMatrix with only dead cells should not spawn any new cell.', () => {
    const currentCellMatrix: CellMatrix = initializeCellMatrix(2,2);

    expect(getNextCellMatrixState(currentCellMatrix)).toEqual(currentCellMatrix);    
});

test('A 3x3 CellMatrix with only dead cells should not spawn any new cell.', () => {
    const currentCellMatrix: CellMatrix = initializeCellMatrix(3,3);

    expect(getNextCellMatrixState(currentCellMatrix)).toEqual(currentCellMatrix);    
});

test('A 2x2 CellMatrix with one dead cell and 3 live cells should spawn a new cell.', () => {
    const currentCellMatrix: CellMatrix = [
        [
            { state: 'alive' },
            { state: 'alive' },
        ],
        [
            { state: 'alive' },
            { state: 'dead' },
        ]
    ];

    const expectedCellMatrix: CellMatrix = [
        [
            { state: 'alive' },
            { state: 'alive' },
        ],
        [
            { state: 'alive' },
            { state: 'alive' },
        ]
    ];

    expect(getNextCellMatrixState(currentCellMatrix)).toEqual(expectedCellMatrix);    
});

test('A 2x2 CellMatrix with just 2 live cells should make all cells die.', () => {
    const currentCellMatrix: CellMatrix = [
        [
            { state: 'alive' },
            { state: 'dead' },
        ],
        [
            { state: 'dead' },
            { state: 'alive' },
        ]
    ];

    const expectedCellMatrix: CellMatrix = [
        [
            { state: 'dead' },
            { state: 'dead' },
        ],
        [
            { state: 'dead' },
            { state: 'dead' },
        ]
    ];

    expect(getNextCellMatrixState(currentCellMatrix)).toEqual(expectedCellMatrix);    
});

test('(Rule 1) On a 3x3 CellMatrix any live cell with two or three live neighbours lives on to the next generation..', () => {
    /*
    | | |X|
    | |X| |
    |X| | |
    */
    const currentCellMatrix: CellMatrix = [
        [
            { state: 'dead' },
            { state: 'dead' },
            { state: 'alive' },
        ],
        [
            { state: 'dead' },
            { state: 'alive' },
            { state: 'dead' },
        ],
        [
            { state: 'alive' },
            { state: 'dead' },
            { state: 'dead' },
        ]
    ];
    /*
    | | | |
    | |X| |
    | | | |
    */
    const expectedCellMatrix: CellMatrix = [
        [
            { state: 'dead' },
            { state: 'dead' },
            { state: 'dead' },
        ],
        [
            { state: 'dead' },
            { state: 'alive' },
            { state: 'dead' },
        ],
        [
            { state: 'dead' },
            { state: 'dead' },
            { state: 'dead' },
        ]
    ];

    expect(getNextCellMatrixState(currentCellMatrix)).toEqual(expectedCellMatrix);    
});

test('(Rule 2) On a 3x3 CellMatrix any live cell with more than three live neighbours dies, as if by overpopulation.', () => {
    /*
    |X|X|X|
    |X|X|X|
    |X|X|X|
    */
    const currentCellMatrix: CellMatrix = [
        [
            { state: 'alive' },
            { state: 'alive' },
            { state: 'alive' },
        ],
        [
            { state: 'alive' },
            { state: 'alive' },
            { state: 'alive' },
        ],
        [
            { state: 'alive' },
            { state: 'alive' },
            { state: 'alive' },
        ]
    ];
    /*
    |X| |X|
    | | | |
    |X| |X|
    */
    const expectedCellMatrix: CellMatrix = [
        [
            { state: 'alive' },
            { state: 'dead' },
            { state: 'alive' },
        ],
        [
            { state: 'dead' },
            { state: 'dead' },
            { state: 'dead' },
        ],
        [
            { state: 'alive' },
            { state: 'dead' },
            { state: 'alive' },
        ]
    ];

    expect(getNextCellMatrixState(currentCellMatrix)).toEqual(expectedCellMatrix);    
});

test('(Rule 3) On a 3x3 CellMatrix any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.', () => {
    /*
    | | |X|
    |X| | |
    | | |X|
    */
    const currentCellMatrix: CellMatrix = [
        [
            { state: 'dead' },
            { state: 'dead' },
            { state: 'alive' },
        ],
        [
            { state: 'alive' },
            { state: 'dead' },
            { state: 'dead' },
        ],
        [
            { state: 'dead' },
            { state: 'dead' },
            { state: 'alive' },
        ]
    ];
    /*
    | | | |
    | |X| |
    | | | |
    */
    const expectedCellMatrix: CellMatrix = [
        [
            { state: 'dead' },
            { state: 'dead' },
            { state: 'dead' },
        ],
        [
            { state: 'dead' },
            { state: 'alive' },
            { state: 'dead' },
        ],
        [
            { state: 'dead' },
            { state: 'dead' },
            { state: 'dead' },
        ]
    ];

    expect(getNextCellMatrixState(currentCellMatrix)).toEqual(expectedCellMatrix);    
});

