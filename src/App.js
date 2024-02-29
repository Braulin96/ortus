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
       <OverSpeedTrends/>
       <SecondDataLog/>
     
      </header>
    </div>
  );
}

export default App;
