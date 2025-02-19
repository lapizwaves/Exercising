import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Timer from "./components/timer";

const PushUp = () => {
  return (
    <div className="pushup">
      <h1>Push-Up</h1>
      <br />
      <p>It's already too late</p>
      <Timer />
    </div>
  );
};

export default PushUp;
