import DataLog from "./components/DataLog/DataLog";
import JourneyStatistics from "./components/JourneyStatistics";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <JourneyStatistics/>
       <DataLog/>
      </header>
    </div>
  );
}

export default App;
