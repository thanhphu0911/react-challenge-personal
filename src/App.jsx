import "./App.css";
import ColorBoxApp from "./ColorBoxApp/ColorBoxApp";
import ModalRef from "./ModalRef/ModalRef";
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

      <br />
      <ModalRef />
    </>
  );
}

export default App;
