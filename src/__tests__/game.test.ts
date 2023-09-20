import { expect, test } from 'vitest'
import { initializeCell } from "../core/game";
import { Cell } from '../types/cell';

test('Should initialize a dead cell', () => {
    const expectedCell: Cell = { state: 'dead', coordinates: { xAxis: 0, yAxis: 0}}
    expect(initializeCell('dead', { xAxis: 0, yAxis: 0})).toEqual(expectedCell);
})
