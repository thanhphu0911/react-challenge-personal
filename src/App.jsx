import "./App.css";
import ColorBoxApp from "./ColorBoxApp/ColorBoxApp";
import TodoTrackerApp from "./TodoTrackerApp/TodoTrackerApp";
import TrafficApp from "./TrafficLightApp/TrafficApp";

function App() {
  return (
    <>
      <ColorBoxApp />

      <br />
      <TrafficApp />

      <br />
      <TodoTrackerApp />
    </>
  );
}

export default App;
