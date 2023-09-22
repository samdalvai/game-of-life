import { expect, test } from 'vitest';
import { getCellNextState, getNextBoardState } from "../core/rules";
import { Cell, GameBoard } from '../types/game';
import { getCellNeighboursAliveCount, printGameboard } from '../core/game';

test('Any live cell with two live neighbours lives on to the next generation.', () => {
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

test('Any live cell with three live neighbours lives on to the next generation.', () => {
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

test('Any live cell with more than three live neighbours dies, as if by overpopulation.', () => {
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

test('Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.', () => {
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

test('A gameboard with only dead cells should not spawn any new cell.', () => {
    const currentGameboard: GameBoard = [
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

    expect(getNextBoardState(currentGameboard)).toEqual(currentGameboard);    
});

test('A gameboard with a dead cell with exactly three live neighbours should spawn a new alive cell', () => {
    const currentGameboard: GameBoard = [
        [
            { state: 'alive', coordinates: { xAxis: 0, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 2 } }
        ],
        [
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 2 } }
        ],
        [
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 0 } },
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 1 } },
            { state: 'alive', coordinates: { xAxis: 1, yAxis: 2 } }
        ]
    ];

    console.log("Current: ")
    console.log(printGameboard(currentGameboard))

    const cell: Cell = { state: 'alive', coordinates: { xAxis: 1, yAxis: 1 }}
    const count = getCellNeighboursAliveCount(currentGameboard, cell)
    console.log("Alive count of cell: ", cell, " is: ", count)

    const cell2: Cell = { state: 'dead', coordinates: { xAxis: 0, yAxis: 2 }}
    const count2 = getCellNeighboursAliveCount(currentGameboard, cell)
    console.log("Alive count of cell: ", cell2, " is: ", count2)

    const expectedGameBoard: GameBoard = [
        [
            { state: 'dead', coordinates: { xAxis: 0, yAxis: 0 } },
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
            { state: 'dead', coordinates: { xAxis: 1, yAxis: 2 } }
        ]
    ];

    console.log("Expected: ")
    console.log(printGameboard(expectedGameBoard))

    console.log("Received: ")
    console.log(printGameboard(getNextBoardState(currentGameboard)))

    expect(getNextBoardState(currentGameboard)).toEqual(expectedGameBoard);    
});

//Any live cell with two or three live neighbours lives on to the next generation.

//Any live cell with more than three live neighbours dies, as if by overpopulation.

//Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.