import { expect, test } from 'vitest';
import { getNextCellMatrixState } from "../core/rules";
import { CellMatrix } from '../types/game';
import { initializeCellMatrix } from '../core/game';

test('Test for execution time of getNextCellMatrixState() function.', () => {
    let totalTime: number = 0;
    const numberOfTests = 20;

    for (let i = 0; i < numberOfTests; i++) {
        const start: Date = new Date();
        const currentCellMatrix: CellMatrix = initializeCellMatrix(100,100);
        
        getNextCellMatrixState(currentCellMatrix);
        const end: Date = new Date();
    
        const executionTime: number = end.getMilliseconds() - start.getMilliseconds();

        totalTime += executionTime;
    }

    const medianTime = totalTime / numberOfTests;

    console.log("Medium Execution time: " + medianTime + " ms");

    expect(true).toEqual(true);    
});

