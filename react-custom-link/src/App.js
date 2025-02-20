import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Running from "./exercise/pages/running";
import Pushup from "./exercise/pages/pushup";
import Plank from "./exercise/pages/plank";
import Home from "./exercise/pages/home";

function MyButton({ to, children }) {
  return (
    <div>
      <Link to={to}>
        <button>{children}</button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <div className="button-div">
          <MyButton to="">Home</MyButton>
          <MyButton to="running">Running</MyButton>
          <MyButton to="pushup">Push Up</MyButton>
          <MyButton to="plank">Plank</MyButton>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/running" element={<Running />} />
          <Route path="pushup" element={<Pushup />} />
          <Route path="plank" element={<Plank />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
