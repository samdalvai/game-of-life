import { useState } from "react";
import { CellMatrix } from "../types/game";
import { initializeCellMatrix } from "../core/game";

const GameBoard = ({rows, columns}: {rows: number, columns: number}) => {
    const [cellMatrix, setCellMatrix] = useState<CellMatrix>(initializeCellMatrix(rows, columns));


    return <div></div>;
}

export default GameBoard;