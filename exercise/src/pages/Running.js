import React, { useState, useEffect } from "react";
import Timer from "./components/timer";
import Repetition from "./components/repetition";

const Running = () => {
  return (
    <div className="running">
      <h1>Running</h1>
      <br />
      <p>See how long you can sprint!</p>
      <Timer />
    </div>
  );
};

export default Running;
