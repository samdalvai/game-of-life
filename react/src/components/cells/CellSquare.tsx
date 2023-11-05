import { CallBack } from '../../types/callbacks';
import { Cell } from 'game-of-life-core';

const CellSquare = ({cell, onClick}: {cell: Cell, onClick: CallBack}) => {
    const cellColors = {
        alive: 'bg-black',
        dead: 'bg-white'
    };

    return <div className={`w-10 h-10 flex-shrink-0 border-solid border border-slate-500 rounded-sm cursor-pointer ${cellColors[cell.state]} ${cell.state === 'alive' ? 'hover:bg-red-400' : 'hover:bg-green-500'}`} onClick={onClick}/>;
};

export default CellSquare;