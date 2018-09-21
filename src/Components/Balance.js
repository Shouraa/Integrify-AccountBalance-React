import React, { Component } from "react";

const Balance = props => {
  return (
    <div className="balanceHead">
      <h3>Balance:</h3>
      <h3>
        {props.balance}
        &euro;
      </h3>
    </div>
  );
};

export default Balance;
