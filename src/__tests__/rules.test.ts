import { expect, test } from 'vitest';
import { getCellNextState, getNextBoardState } from "../core/rules";
import { GameBoard } from '../types/game';
import { initializeBoard } from '../core/game';

test('(Rule 1) Any live cell with two live neighbours lives on to the next generation.', () => {
    const gameBoard: GameBoard = [
        [
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 2 } }
        ],
        [
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 2 } }
        ],
        [
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 2 } }
        ]
    ];
    expect(getCellNextState(gameBoard, { state: 'alive', coordinates: { xAxis: 1, yAxis: 1 } })).toEqual('alive');
});

test('(Rule 1) Any live cell with three live neighbours lives on to the next generation.', () => {
    const gameBoard: GameBoard = [
        [
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 0 } },
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 2 } }
        ],
        [
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 2 } }
        ],
        [
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 2 } }
        ]
    ];
    expect(getCellNextState(gameBoard, { state: 'alive', coordinates: { xAxis: 1, yAxis: 1 } })).toEqual('alive');
});

test('(Rule 2) Any live cell with more than three live neighbours dies, as if by overpopulation.', () => {
    const gameBoard: GameBoard = [
        [
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 0 } },
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 2 } }
        ],
        [
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 2 } }
        ],
        [
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 2 } }
        ]
    ];
    expect(getCellNextState(gameBoard, { state: 'alive', coordinates: { xAxis: 1, yAxis: 1 } })).toEqual('dead');
});

test('(Rule 3) Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.', () => {
    const gameBoard: GameBoard = [
        [
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 2 } }
        ],
        [
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 2 } }
        ],
        [
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 2 } }
        ]
    ];
    expect(getCellNextState(gameBoard, { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } })).toEqual('alive');
});

test('Any dead cell with less than three live neighbours remains dead.', () => {
    const gameBoard: GameBoard = [
        [
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 2 } }
        ],
        [
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 2 } }
        ],
        [
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 2 } }
        ]
    ];
    expect(getCellNextState(gameBoard, { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } })).toEqual('dead');
});

test('Any dead cell with more than three live neighbours remains dead.', () => {
    const gameBoard: GameBoard = [
        [
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 2 } }
        ],
        [
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 2 } }
        ],
        [
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 2 } }
        ]
    ];
    expect(getCellNextState(gameBoard, { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } })).toEqual('dead');
});

test('A 2x2 gameboard with only dead cells should not spawn any new cell.', () => {
    const currentGameboard: GameBoard = initializeBoard(2,2);

    expect(getNextBoardState(currentGameboard)).toEqual(currentGameboard);    
});

test('A 3x3 gameboard with only dead cells should not spawn any new cell.', () => {
    const currentGameboard: GameBoard = initializeBoard(3,3);

    expect(getNextBoardState(currentGameboard)).toEqual(currentGameboard);    
});

test('A 2x2 gameboard with one dead cell and 3 live cells should spawn a new cell.', () => {
    const currentGameboard: GameBoard = [
        [
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 0 } },
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 1 } },
        ],
        [
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
        ]
    ];

    const expectedGameBoard: GameBoard = [
        [
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 0 } },
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 1 } },
        ],
        [
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 1 } },
        ]
    ];

    expect(getNextBoardState(currentGameboard)).toEqual(expectedGameBoard);    
});

test('A 2x2 gameboard with just 2 live cells should make all cells die.', () => {
    const currentGameboard: GameBoard = [
        [
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 1 } },
        ],
        [
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 1 } },
        ]
    ];

    const expectedGameBoard: GameBoard = [
        [
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 1 } },
        ],
        [
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
        ]
    ];

    expect(getNextBoardState(currentGameboard)).toEqual(expectedGameBoard);    
});

test('(Rule 1) On a 3x3 gameboard any live cell with two or three live neighbours lives on to the next generation..', () => {
    /*
    | | |X|
    | |X| |
    |X| | |
    */
    const currentGameboard: GameBoard = [
        [
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 2 } },
        ],
        [
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 2 } },
        ],
        [
            { state: 'alive', coordinates: { xAxis: 2, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 2, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 2, yAxis: 2 } },
        ]
    ];
    /*
    | | | |
    | |X| |
    | | | |
    */
    const expectedGameBoard: GameBoard = [
        [
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 2 } },
        ],
        [
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 2 } },
        ],
        [
            { state: 'dead', coordinates: { xAxis: 2, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 2, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 2, yAxis: 2 } },
        ]
    ];

    expect(getNextBoardState(currentGameboard)).toEqual(expectedGameBoard);    
});

test('(Rule 2) On a 3x3 gameboard any live cell with more than three live neighbours dies, as if by overpopulation.', () => {
    /*
    |X|X|X|
    |X|X|X|
    |X|X|X|
    */
    const currentGameboard: GameBoard = [
        [
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 0 } },
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 2 } },
        ],
        [
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 2 } },
        ],
        [
            { state: 'alive', coordinates: { xAxis: 2, yAxis: 0 } },
            { state: 'alive', coordinates: { xAxis: 2, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 2, yAxis: 2 } },
        ]
    ];
    /*
    |X| |X|
    | | | |
    |X| |X|
    */
    const expectedGameBoard: GameBoard = [
        [
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 2 } },
        ],
        [
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 2 } },
        ],
        [
            { state: 'alive', coordinates: { xAxis: 2, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 2, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 2, yAxis: 2 } },
        ]
    ];

    expect(getNextBoardState(currentGameboard)).toEqual(expectedGameBoard);    
});

test('(Rule 3) On a 3x3 gameboard any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.', () => {
    /*
    | | |X|
    |X| | |
    | | |X|
    */
    const currentGameboard: GameBoard = [
        [
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 2 } },
        ],
        [
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 2 } },
        ],
        [
            { state: 'dead', coordinates: { xAxis: 2, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 2, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 2, yAxis: 2 } },
        ]
    ];
    /*
    | | | |
    | |X| |
    | | | |
    */
    const expectedGameBoard: GameBoard = [
        [
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 2 } },
        ],
        [
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 2 } },
        ],
        [
            { state: 'dead', coordinates: { xAxis: 2, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 2, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 2, yAxis: 2 } },
        ]
    ];

    expect(getNextBoardState(currentGameboard)).toEqual(expectedGameBoard);    
});


