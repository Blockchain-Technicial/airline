import React from "react";

const Panel = (props) => {
  return (
    <div className="card">
      <div className="card-header bg-info text-white">{props.title}</div>
      <div className="card-body">{props.children}</div>
    </div>
  );
};

export default Panel;