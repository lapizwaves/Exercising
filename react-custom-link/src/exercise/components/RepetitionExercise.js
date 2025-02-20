import React, { useState } from "react";

function Reps() {
  const [repNumber, setRepNumber] = useState(0);

  function increaseReps() {
    setRepNumber((prev) => prev + 1);
  }

  function decreaseReps() {
    if (repNumber > 0) {
      setRepNumber((prev) => prev - 1);
    }
  }

  function resetReps() {
    setRepNumber(0);
  }
  return (
    <div>
      <p>{repNumber}</p>
      <div className="buttons">
        <button onClick={increaseReps}>Increase Reps</button>
        <button onClick={decreaseReps} disabled={repNumber <= 0}>
          Decrease Reps
        </button>
        <button onClick={resetReps}>Reset Reps</button>
      </div>
    </div>
  );
}

export default Reps;
