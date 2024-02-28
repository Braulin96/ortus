import DataLog from "./components/DataLog/DataLog";
import JourneyStatistics from "./components/JourneyStatistics";
import OverSpeedTrends from "./components/OverSpeedTrends/OverSpeedTrends";
import SecondDataLog from "./components/SecondDataLog/SecondDataLog";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <JourneyStatistics/> */}
       {/* <DataLog/> */}
       <SecondDataLog/>
       <OverSpeedTrends/>
      </header>
    </div>
  );
}

export default App;
