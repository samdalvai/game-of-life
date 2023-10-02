import GameBoard from './components/GameBoard';

function App() {
  return (
    <div className="w-screen h-screen bg-slate-300 flex flex-col justify-center items-center p-2">
      <GameBoard rows={40} columns={64} />
    </div >
  );
}

export default App;
