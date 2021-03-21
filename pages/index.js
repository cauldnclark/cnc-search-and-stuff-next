import React from "react";
import HomePage from "./HomePage";

export default function Home() {
  // const [counter, setCounter] = React.useState(0);
  // const [counterTwo, setCounterTwo] = React.useState(0);
  // const [currentCounter, setCurrentCounter] = React.useState(true);

  return (
    <>
      <HomePage />
      {/* 
      /////Question: To be deleted?/////

      <h3>JavaScript C&C COUNTER</h3>
      <h2>{counter}</h2>

      <h2>{counterTwo}</h2>

      <button
        style={{ marginRight: 20 }}
        onClick={() =>
          currentCounter
            ? setCounter(counter + 1)
            : setCounterTwo(counterTwo + 1)
        }
      >
        INCREMENT
      </button>
      <button
        onClick={() =>
          currentCounter
            ? setCounter(counter - 1)
            : setCounterTwo(counterTwo - 1)
        }
      >
        DECREMENT
      </button>
      <br />
      <br />
      <button onClick={() => setCurrentCounter(!currentCounter)}>
        {`TOGGLE ${currentCounter ? 1 : 2}`}
      </button> */}
    </>
  );
}
