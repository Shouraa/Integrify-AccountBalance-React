import React, { Component } from "react";

const Income = props => {
  return (
    <ul>
      <h3>Incomes</h3>
      {props.incomes.map((income, index) => (
        <li className="list" key={index} index={index}>
          <div>
            {income.description} -- {income.amount} &euro; "{income.time}"
            <button onClick={props.handleDelete}>delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Income;
