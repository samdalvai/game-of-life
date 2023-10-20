import { useState } from 'react';
import GameLogo from '../core/GameLogo';
import Button from '../core/Button';
import GameBoard from './GameBoard';
import NumberInput from '../core/NumberInput';
import { GameBoardSize } from '../../types/game';
import CheckBoxInput from '../core/CheckBoxInput';

const MainMenu = () => {
    const [startGame, setStartGame] = useState<boolean>(false);
    const [gameBoardSize, setGameBoardSize] = useState<GameBoardSize>(getDefaultGameBoardSize());
    const [infiniteGameBoard, setInfiniteGameBoard] = useState<boolean>(false);

    function getDefaultGameBoardSize(): GameBoardSize {
        if (window.innerWidth <= 640) {
            return { rows: 50, columns: 40 };
        }

        if (window.innerWidth <= 768) {
            return { rows: 40, columns: 50 };
        }

        return { rows: 40, columns: 70 };
    }

    if (startGame) {
        return <GameBoard
            rows={gameBoardSize.rows}
            columns={gameBoardSize.columns}
            infiniteGameBoard={infiniteGameBoard} onBack={() => setStartGame(false)}
        />;
    }

    const handleStartGame = () => {
        if (gameBoardSize.rows > 0 && gameBoardSize.columns > 0) {
            setStartGame(true);
        }
    };

    const handleGameBoardSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue: number | string = event.target.value ? parseInt(event.target.value) : '';
        setGameBoardSize({ ...gameBoardSize, [event.target.name]: newValue });
    };

    return <div className="w-full h-2/3 lg:w-1/2 rounded-md flex flex-col justify-center items-center bg-white shadow-sm border border-black">
        <h1 className="font-bold text-2xl py-3 text-blue-600">Game of Life</h1>
        <GameLogo />
        <div className="pt-4 pb-2">
            <div className="px-2">
                <Button text="Start game" color="blue" onClick={handleStartGame} />
            </div>
            <div className="flex py-2 px-2">
                <div className="pe-1 w-1/3">
                    <NumberInput
                        value={gameBoardSize.rows}
                        label="Rows"
                        name="rows"
                        onChange={handleGameBoardSizeChange}
                    />
                </div>
                <div className="px-1 w-1/3">
                    <NumberInput
                        value={gameBoardSize.columns}
                        label="Columns"
                        name="columns"
                        onChange={handleGameBoardSizeChange}
                    />
                </div>
                <div className="ps-1 w-1/3">
                    <CheckBoxInput
                        checked={infiniteGameBoard}
                        label="Infinite board"
                        name="infinite-board"
                        onChange={() => setInfiniteGameBoard((current) => !current)}
                    />
                </div>
            </div>
        </div>
    </div>;
};

export default MainMenu;