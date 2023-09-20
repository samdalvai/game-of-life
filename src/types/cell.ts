export type CellState = "dead" | "alive"

export interface Coordinates {
    xAxis: number;
    yAxis: number;
}

export interface Cell {
    state: CellState;
    coordinates: Coordinates;
}

export type GameBoard = Cell[][]