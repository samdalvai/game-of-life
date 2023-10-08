import Button from './Button';
import { BackIcon, DeleteIcon, NextIcon, PauseIcon, PlayIcon, UpdateIcon } from '../icons/Icons';
import { CallBack } from '../types/callbacks';

const GameBoardMenu = ({ gameRunning, onRun, onReset, onNext, onRandomize, onBack }: { gameRunning: boolean, onRun: CallBack, onReset: CallBack, onNext: CallBack, onRandomize: CallBack, onBack: CallBack }) => {
    return <div className="pt-3 w-full flex flex-col md:flex-row">
        <div className="w-full md:w-3/5 flex md:pe-1">
            <div className="pe-1 w-1/3">
                <Button
                    icon={!gameRunning ? <PlayIcon /> : <PauseIcon />}
                    color={!gameRunning ? 'green' : 'yellow'}
                    text={!gameRunning ? 'Run' : 'Pause'}
                    onClick={onRun}
                />
            </div>
            <div className="px-1 w-1/3">
                <Button
                    icon={<DeleteIcon />}
                    color="gray"
                    text="Reset"
                    onClick={onReset}
                />
            </div>
            <div className="ps-1 w-1/3">
                <Button
                    icon={<NextIcon />}
                    color="blue"
                    text="Next"
                    onClick={onNext}
                />
            </div>
        </div>
        <div className="w-full md:w-2/5 flex pt-2 md:ps-1 md:pt-0">
            <div className="pe-1 w-1/2">
                <Button
                    icon={<UpdateIcon />}
                    color="orange"
                    text="Random"
                    onClick={onRandomize}
                />
            </div>
            <div className="ps-1 w-1/2">
                <Button
                    icon={<BackIcon />}
                    color="blue"
                    text="Back"
                    onClick={onBack}
                />
            </div>
        </div>
    </div>;
};

export default GameBoardMenu;