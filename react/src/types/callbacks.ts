import { Cell, Coordinates } from 'game-of-life-core';

export type CallBack = () => void

export type CellCallBack = (cell: Cell) => void

export type CoordinatesCallBack = (coordinates: Coordinates) => void

export type StringCallBack = (arg: string) => void

export type NumberCallBack = (arg: number) => void