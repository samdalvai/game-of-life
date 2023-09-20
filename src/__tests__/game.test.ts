import { expect, test } from 'vitest'
import { initializeBoard, initializeCell } from "../core/game";
import { Cell, GameBoard } from '../types/cell';

test('Should initialize a dead cell', () => {
    const expectedCell: Cell = { state: 'dead'}
    expect(initializeCell('dead')).toEqual(expectedCell);
})

test('Should initialize an alive cell', () => {
    const expectedCell: Cell = { state: 'alive'}
    expect(initializeCell('alive')).toEqual(expectedCell);
})

test('Should initialize a 2x2 game board with dead cells', () => {
    const expectedCell: Cell = { state: 'dead'}
    const expectedGameBoard: GameBoard = []
    expect(initializeBoard(2,2)).toEqual(expectedGameBoard);
})
