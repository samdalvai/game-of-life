import { CellCallBack } from "../types/callbacks";
import { Cell, CellMatrix } from "../types/game";
import CellSquare from "./CellSquare";

const CellMatrixField = ({ cellMatrix, onCellClick }: { cellMatrix: CellMatrix, onCellClick: CellCallBack }) => {
    return <>
        {
            cellMatrix.map((cellRow: Cell[], index: number) => <div key={'row-' + index} className="flex justify-center">
                {
                    cellRow.map((cell: Cell) => {
                        const { xAxis, yAxis } = cell.coordinates;
                        return <CellSquare
                            key={'cell-' + xAxis + yAxis}
                            cell={cell}
                            onClick={() => onCellClick(cell)} />;
                    })
                }
            </div>)
        }
    </>;
};

export default CellMatrixField;