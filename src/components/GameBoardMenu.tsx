import Button from './Button';
import { DeleteIcon, NextIcon, PauseIcon, PlayIcon, UpdateIcon } from '../icons/Icons';
import { CallBack } from '../types/callbacks';

const GameBoardMenu = ({ gameRunning, onRun, onReset, onNext, onRandomize }: { gameRunning: boolean, onRun: CallBack, onReset: CallBack, onNext: CallBack, onRandomize: CallBack }) => {
    return <div className="pt-3 w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex md:pe-1">
            <div className="pe-1 w-1/2">
                <Button
                    text={!gameRunning ? 'Run game' : 'Stop game'}
                    icon={!gameRunning ? <PlayIcon /> : <PauseIcon />}
                    color={!gameRunning ? 'green' : 'red'}
                    onClick={onRun}
                />
            </div>
            <div className="ps-1 w-1/2">
                <Button
                    text="Reset"
                    icon={<DeleteIcon />}
                    color="gray"
                    onClick={onReset}
                />
            </div>
        </div>
        <div className="w-full md:w-1/2 flex pt-2 md:ps-1 md:pt-0">
            <div className="pe-1 w-1/2">
                <Button
                    text="Get next state"
                    icon={<NextIcon />}
                    color="blue"
                    onClick={onNext}
                />
            </div>
            <div className="ps-1 w-1/2">
                <Button
                    text="Randomize"
                    icon={<UpdateIcon />}
                    color="indigo"
                    onClick={onRandomize}
                />
            </div>
        </div>
    </div>;
};

export default GameBoardMenu;