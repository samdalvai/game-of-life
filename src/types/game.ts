export type CellState = 'dead' | 'alive'

export interface Cell {
    state: CellState
    //coordinates: Coordinates
}

export interface Coordinates {
    xAxis: number
    yAxis: number
}

export type CellMatrix = Cell[][]