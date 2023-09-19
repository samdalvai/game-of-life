export type CellState = "dead" | "alive"

export interface Coordinates {
    x_axis: number;
    y_axis: number;
}

export interface Cell {
    state: CellState;
    coordinates: Coordinates;
}