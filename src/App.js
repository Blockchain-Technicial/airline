import React from "react";
import Panel from "./Panel";

function App() {
  return (
    <>
      {/* Encabezado con logo */}
      <div>
        <img
          className="logo"
          src="http://80.211.106.169/logo.png"
          alt="Bravo logo"
          width="200"
        />
      </div>
      <hr />
      {/* Sección de paneles */}
      <div className="row">
        <div className="col-sm">
          <Panel title="Balance" />
        </div>
        <div className="col-sm">
          <Panel title="Loyalty points - refundable ether" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <Panel title="Available flights" />
        </div>
        <div className="col-sm">
          <Panel title="Your flights" />
        </div>
      </div>
    </>
  );
}

export default App;
