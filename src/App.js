import React from "react";
import Panel from "./Panel";

const App = () => {
  return (
    <>
      <div className="jumbotron">
        <h4 className="display-4">Ethereum Airline!</h4>
      </div>
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
};

export default App;
