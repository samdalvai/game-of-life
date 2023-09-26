import { Cell, Coordinates } from "./game";

export type CallBack = () => void
export type CellCallBack = (cell: Cell) => void
export type CoordinatesCallBack = (coordinates: Coordinates) => void