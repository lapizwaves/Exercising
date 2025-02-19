import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import "./App.css";

// Import components from correct paths
import Plank from "./pages/Plank";
import PushUp from "./pages/PushUp";
import Running from "./pages/Running";
import HomeP from "./pages/home";

const HomePage = () => {
  return <HomeP />;
};

const PlankPage = () => {
  return <Plank />;
};

const PushUpPage = () => {
  return <PushUp />;
};

const RunningPage = () => {
  return <Running />;
};

// Main App Component
const App = () => {
  const [showPage, setShowPage] = useState(false);
  const navigate = useNavigate();

  const goToHomePage = () => {
    setShowPage(true);
    navigate("/home");
  };

  const goToPlankPage = () => {
    setShowPage(true);
    navigate("/plank");
  };

  const goToPushUpPage = () => {
    setShowPage(true);
    navigate("/pushUp");
  };

  const goToRunningPage = () => {
    setShowPage(true);
    navigate("/running");
  };

  return (
    <div className="App">
      <button onClick={goToHomePage}>Home Page</button>
      <button onClick={goToPlankPage}>Planking Challenge</button>
      <button onClick={goToPushUpPage}>Push-Up Challenge</button>
      <button onClick={goToRunningPage}>Running Challenge</button>

      <Routes>
        <Route path="/" />
        <Route path="/home" element={<HomeP />} />
        <Route path="/Plank" element={<Plank />} />
        <Route path="/PushUp" element={<PushUp />} />
        <Route path="/Running" element={<Running />} />
        <Route></Route>
      </Routes>
    </div>
  );
};

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}
