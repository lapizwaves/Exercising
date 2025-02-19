import React, { useState, useEffect } from "react";

function Repetition() {
  const [reps, setReps] = useState(0);

  const resetReps = () => {
    setReps(0);
  };

  const repsChange = (event) => {
    setReps(event.target.value);
  };

  return (
    <div className="repetition-container" id="repetition-container">
      <label for="repNum">Completed Reps</label>
      <input
        type="number"
        id="repNum"
        min="0"
        max="100"
        value={reps}
        onChange={repsChange}
      />
      <button onClick={resetReps}>Reset</button>
    </div>
  );
}

export default Repetition;
