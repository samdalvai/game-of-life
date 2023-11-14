import { ReactNode } from 'react';

export type ChildrenProps = ReactNode;

export type ButtonColor = 'blue' | 'gray' | 'green' | 'red' | 'indigo' | 'orange' | 'yellow'

export interface GameBoardSize {
    rows: number,
    columns: number
}