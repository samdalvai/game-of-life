import { useState } from "react";
import GameLogo from "./GameLogo";

const MainMenu = () => {
    const [startGame, setStartGame] = useState<boolean>(false);

    return <div className="w-full h-full md:w-96 md:h-96 rounded-md flex flex-col justify-center items-center bg-white">
        <h1 className="font-bold text-xl py-1">Game of Life</h1>
        <GameLogo />
    </div>;
};

export default MainMenu;