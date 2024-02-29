import DataLog from "./components/DataLog/DataLog";
import JourneyStatistics from "./components/JourneyStatistics";
import OverSpeedTrends from "./components/OverSpeedTrends/OverSpeedTrends";
import SecondDataLog from "./components/SecondDataLog/SecondDataLog";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex flex-col gap-y-28 mt-10">
          <JourneyStatistics />
          <DataLog />
          <OverSpeedTrends />
          <SecondDataLog />
        </div>
      </header>
    </div>
  );
}

export default App;
