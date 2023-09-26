import { expect, test } from 'vitest';
import { getNextCellMatrixState } from "../core/rules";
import { CellMatrix } from '../types/game';
import { initializeCellMatrix } from '../core/game';

test('Test for execution time of getNextCellMatrixState() function.', () => {
    const start: Date = new Date();
    const currentCellMatrix: CellMatrix = initializeCellMatrix(100,100);
    
    const nextCellMatrix: CellMatrix = getNextCellMatrixState(currentCellMatrix);
    const end: Date = new Date();

    const executionTime: number = end.getMilliseconds() - start.getMilliseconds();
    console.log("Execution time: " + executionTime);

    expect(currentCellMatrix).toEqual(nextCellMatrix);    
});
