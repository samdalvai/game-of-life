export type CellState = "dead" | "alive"

export interface Cell {
    state: CellState;
}

export type GameBoard = Cell[][]