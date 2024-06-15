import TrafficLight from "./components/TrafficLight";

function TrafficApp() {
  const trafficState = {
    red: {
      duration: 4000,
      backgroundColor: "red",
      next: "green",
    },
    yellow: {
      duration: 500,
      backgroundColor: "yellow",
      next: "red",
    },
    green: {
      duration: 3000,
      backgroundColor: "green",
      next: "yellow",
    },
  };

  return (
    <>
      <h1>Ex : Traffic Light App</h1>
      <TrafficLight trafficState={trafficState} />
    </>
  );
}

export default TrafficApp;
