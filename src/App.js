import { Aircrafts } from "./components/Aircrafts";
import { Flights } from "./components/Flights";

function App() {
  return (
    <div>
      <h1>Aircraft Scheduling NL</h1>
      <div style={{ position: "relative", display: "flex" }}>
        <Aircrafts />
        <Flights />
      </div>
    </div>
  );
}

export default App;
