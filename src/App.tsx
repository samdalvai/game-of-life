import GameBoard from './components/GameBoard';
import GameLogo from './components/GameLogo';
import MainMenu from './components/MainMenu';

function App() {
  return (
    <div className="w-screen h-screen bg-slate-300 flex flex-col justify-center items-center p-2">
      <GameLogo />
    </div >
  );
}

export default App;
