import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Navbar.jsx";
import Header from "./Components/Header.jsx";

const App = () => {
  return (
    <div className="app">
      <div className="app-bar">
        <Navbar />
      </div>

      <Header />
    </div>
  );
};

export default App;
