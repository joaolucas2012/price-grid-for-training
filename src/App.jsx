import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppDiv } from "./style.jsx";

import Card from "./components/Card";

function App() {
  return (
    <Router>
      <AppDiv>
        <Routes>
          <Route path="/" exact element={<Card />} />
        </Routes>
      </AppDiv>
    </Router>
  );
}

export default App;
