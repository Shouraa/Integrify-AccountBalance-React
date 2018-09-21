import React, { Component } from "react";
import Entry from "./Entry/Entry";

const Expense = props => {
  return (
    <React.Fragment>
      <h2 className="col-head">Expenses</h2>
      <ul>
        <Entry
          list={props.expenses}
          handleDelete={props.handleDelete}
          type="Expense"
        />
      </ul>
    </React.Fragment>
  );
};

export default Expense;
