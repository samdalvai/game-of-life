import { CallBack } from "../types/callbacks";
import { Cell } from "../types/game";

const CellSquare = ({cell, onClick}: {cell: Cell, onClick: CallBack}) => {
    const cellColors = {
        dead: 'bg-black',
        alive: 'bg-white'
    };

    return <span className={`w-10 h-10 border-solid border-2 border-slate-500 rounded-sm cursor-pointer ${cellColors[cell.state]}`} onClick={onClick}/>;
};

export default CellSquare;