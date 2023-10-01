export type CellState = 'dead' | 'alive'

export interface Cell {
    state: CellState
}

export interface Coordinates {
    xAxis: number
    yAxis: number
}

export type CellMatrix = Cell[][]