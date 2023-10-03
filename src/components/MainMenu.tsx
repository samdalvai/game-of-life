import { useState } from 'react';
import GameLogo from './GameLogo';
import Button from './Button';
import GameBoard from './GameBoard';

const MainMenu = () => {
    const [startGame, setStartGame] = useState<boolean>(false);

    if (startGame) {
        return <GameBoard rows={40} columns={60} />;
    }

    return <div className="w-full h-2/3 md:w-1/2 rounded-md flex flex-col justify-center items-center bg-white shadow-sm">
        <h1 className="font-bold text-xl py-1">Game of Life</h1>
        <GameLogo />
        <div className="py-2">
            <Button text="Start game" color="blue" onClick={() => setStartGame(true)} />
        </div>
    </div>;
};

export default MainMenu;