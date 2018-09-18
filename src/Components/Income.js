import React, { Component } from "react";
import Entry from "./Entry/Entry";

const Income = props => {
  return (
    <React.Fragment>
      <h2>Incomes</h2>
      <ul>
        <Entry
          list={props.incomes}
          handleDelete={props.handleDelete}
          type="Income"
        />
      </ul>
    </React.Fragment>
  );
};

export default Income;
