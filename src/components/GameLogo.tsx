const GameLogo = () => {
    const Square = ({ color }: { color: 'black' | 'white' }) => {
        return <div className={`w-10 h-10 ${color === 'black' ? 'bg-black' : 'bg-white'} flex-shrink-0 border-solid border border-slate-500 rounded-sm`} />;
    };

    return <div className="shadow-md">
        <div className="flex justify-center">
            <Square color="white" />
            <Square color="black" />
            <Square color="white" />
        </div>
        <div className="flex justify-center">
            <Square color="white" />
            <Square color="white" />
            <Square color="black" />
        </div>
        <div className="flex justify-center">
            <Square color="black" />
            <Square color="black" />
            <Square color="black" />
        </div>
    </div>;
};

export default GameLogo;