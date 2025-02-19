import React, { useState, useEffect } from "react";
import Repetition from "./components/repetition";

const Plank = () => {
  return (
    <div className="plank">
      <h1>Plank Challenge</h1>
      <br />
      <p>Try holding the plank for as long as you can!</p>
      <Repetition />
    </div>
  );
};

export default Plank;
