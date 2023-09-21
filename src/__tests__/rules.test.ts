import { expect, test } from 'vitest';
import { getCellNextState } from "../core/rules";
import { GameBoard } from '../types/game';

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
