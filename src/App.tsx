import GameBoard from "./components/GameBoard";

function App() {
  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-center items-center p-2">
      <GameBoard rows={20} columns={20} />
    </div >
  );
}

export default App;
