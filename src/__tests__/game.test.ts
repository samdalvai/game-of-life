import { expect, test } from 'vitest'
import { initializeBoard, initializeCell, getCellByCoordinates } from "../core/game";
import { Cell, GameBoard } from '../types/game';

test('Should initialize a dead cell', () => {
    const expectedCell: Cell = { state: 'dead', coordinates: { xAxis: 0, yAxis: 0 } }
    expect(initializeCell('dead', { xAxis: 0, yAxis: 0 })).toEqual(expectedCell);
})

test('Should initialize an alive cell', () => {
    const expectedCell: Cell = { state: 'alive', coordinates: { xAxis: 0, yAxis: 0 } }
    expect(initializeCell('alive', { xAxis: 0, yAxis: 0 })).toEqual(expectedCell);
})

test('Should initialize a 2x2 game board with dead cells', () => {
    const expectedCell: Cell = { state: 'dead', coordinates: { xAxis: 0, yAxis: 0 } }
    const expectedGameBoard: GameBoard = [
        [
            { ...expectedCell, coordinates: { xAxis: 0, yAxis: 0 } },
            { ...expectedCell, coordinates: { xAxis: 0, yAxis: 1 } }
        ],
        [
            { ...expectedCell, coordinates: { xAxis: 1, yAxis: 0 } },
            { ...expectedCell, coordinates: { xAxis: 1, yAxis: 1 } }
        ]
    ]
    expect(initializeBoard(2, 2)).toEqual(expectedGameBoard);
})

test('Should retrieve the cell with coordinates x: 0 and y: 0', () => {
    const gameBoard: GameBoard = initializeBoard(2, 2);
    const expectedCell: Cell = { state: 'dead', coordinates: { xAxis: 0, yAxis: 0 } }
    expect(getCellByCoordinates(gameBoard, { xAxis: 0, yAxis: 0})).toEqual(expectedCell);
})

test('Should return null if for the given coordinates there is no cell', () => {
    const gameBoard: GameBoard = initializeBoard(2, 2);
    expect(getCellByCoordinates(gameBoard, { xAxis: 3, yAxis: 0})).toEqual(null);
    expect(getCellByCoordinates(gameBoard, { xAxis: 0, yAxis: 3})).toEqual(null);
    expect(getCellByCoordinates(gameBoard, { xAxis: 3, yAxis: 3})).toEqual(null);
})
