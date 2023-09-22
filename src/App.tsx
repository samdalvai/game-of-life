import CellSquare from "./components/CellSquare";

function App() {

  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center p-2">
      <CellSquare cell={{ state: 'alive', coordinates: { xAxis: 0, yAxis: 0}}} />
    </div>
  );
}

export default App;
