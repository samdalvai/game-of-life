import { Cell } from "../types/game";

const CellSquare = ({cell}: {cell: Cell}) => {
    const cellColors = {
        dead: 'bg-black',
        alive: 'bg-white'
    };

    return <span className={`w-20 h-20 border-solid border-2 border-slate-500 rounded-sm ${cellColors[cell.state]}`} />;
};

export default CellSquare;