import { useEffect, useState } from "react";

function TrafficLight({ trafficState }) {
  const [currentLight, setCurrentLight] = useState("green");
  useEffect(() => {
    const { duration, next } = trafficState[currentLight];

    const timerId = setTimeout(() => {
      setCurrentLight(next);
    }, duration);
    return () => {
      clearTimeout(timerId);
    };
  }, [currentLight]);

  return (
    <div className="traffic_container">
      <div className="traffic-light-container traffic-light-container--vertical">
        {Object.keys(trafficState).map((color) => (
          <div
            key={color}
            className="traffic-light"
            style={{
              backgroundColor:
                color === currentLight && trafficState[color].backgroundColor,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default TrafficLight;
