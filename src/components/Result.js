import React from "react";

const Result = (props) => (
  <div className="result">
    {props.lastResult > 0 ? (
      <div>
        <p>
          With a <span className="result__die"> D{props.lastDieRolled} </span>{" "}
          you rolled:
        </p>
        <h1 key={props.refreshKey} className="result__result">
          {props.lastResult}
        </h1>
      </div>
    ) : (
      <div>
        <p className="result__greeting--desktop">
          click and hold a die to roll
        </p>
        <p className="result__greeting--mobile">tap a die to roll</p>
      </div>
    )}
  </div>
);

Result.defaultProps = {
  lastDieRolled: "20",
  lastResult: -1,
};

export default Result;
