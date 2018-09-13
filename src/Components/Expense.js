import React, { Component } from "react";

const Expense = props => {
  return (
    <ul>
      <h3>Expenses</h3>
      {props.expenses.map((expense, index) => (
        <li className="list" key={index} index={index}>
          <div>
            {expense.description} -- {expense.amount} &euro; {expense.time}
            <button onClick={() => props.handleDelete("Expense", index)}>
              delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Expense;
