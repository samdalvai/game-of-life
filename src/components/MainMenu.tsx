import { useState } from 'react';
import GameLogo from './GameLogo';
import Button from './Button';
import GameBoard from './GameBoard';
import NumberInput from './Input';
import { GameBoardSize } from '../types/game';

const MainMenu = () => {
    const [startGame, setStartGame] = useState<boolean>(false);
    const [gameBoardSize, setGameBoardSize] = useState<GameBoardSize>({
        rows: 40,
        columns: 60
    });

    if (startGame) {
        return <GameBoard rows={gameBoardSize.rows} columns={gameBoardSize.columns} />;
    }

    const handleStartGame = () => {
        if (gameBoardSize.rows > 0 && gameBoardSize.columns > 0) {
            setStartGame(true);
        }
    };

    const handleGameBoardSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'rows') {
            setGameBoardSize({ ...gameBoardSize, rows: parseInt(event.target.value) });
        } else {
            setGameBoardSize({ ...gameBoardSize, columns: parseInt(event.target.value) });
        }
    };

    return <div className="w-full h-2/3 md:w-1/2 rounded-md flex flex-col justify-center items-center bg-white shadow-sm">
        <h1 className="font-bold text-xl py-1">Game of Life</h1>
        <GameLogo />
        <div className="py-2">
            <Button text="Start game" color="blue" onClick={handleStartGame} />
            <NumberInput
                value={gameBoardSize.rows}
                label="Rows"
                name="rows"
                onChange={handleGameBoardSizeChange}
            />
            <NumberInput
                value={gameBoardSize.columns}
                label="Columns"
                name="columns"
                onChange={handleGameBoardSizeChange}
            />
        </div>
    </div>;
};

export default MainMenu;