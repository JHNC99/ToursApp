import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tours from "./components/Tours";

function App() {
  return (
    <div className="container">
      <h2 className="text-center">Tours</h2>
      <div className="row">
        <Tours />
        <Tours />
      </div>
    </div>
  );
}

export default App;
