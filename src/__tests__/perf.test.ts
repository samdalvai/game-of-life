import { expect, test } from 'vitest';
import { getNextCellMatrixState } from "../core/rules";
import { CellMatrix } from '../types/game';
import { initializeCellMatrix } from '../core/game';

test('Test for execution time of getNextCellMatrixState() function.', () => {
    let totalTime: number = 0;
    const numberOfTests = 1;

    for (let i = 0; i < numberOfTests; i++) {
        const start: number = performance.now();
        const currentCellMatrix: CellMatrix = initializeCellMatrix(1000,1000);
        
        getNextCellMatrixState(currentCellMatrix);
        const end: number = performance.now();
    
        const executionTime: number = end - start;

        totalTime += executionTime;
    }

    const medianTime = totalTime / numberOfTests;

    console.log("Medium Execution time: " + medianTime + " ms");

    expect(true).toEqual(true);    
});

