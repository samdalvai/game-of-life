import { Cell, CellState, Coordinates } from "../types/cell"

export const initializeBoard = (width: number, height: number) => {
    
}

export const initializeCell = (initialState: CellState, coordinates: Coordinates): Cell => {
    return { state: initialState, coordinates: coordinates};
} 