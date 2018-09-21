import React, { Component } from "react";

const Form = props => {
  return (
    <div className="inputBar">
      <input
        type="text"
        placeholder="Description"
        value={props.description}
        onChange={props.handleDescriptionChange}
      />
      <input
        type="text"
        value=""
        placeholder="Amount"
        value={props.amount}
        onChange={props.handleAmountChange}
      />

      <select value={props.addType} onChange={props.handleAddType}>
        <option value="Type">Select a Type:</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>

      <div className="btn" onClick={props.addItem}>
        ADD
      </div>
    </div>
  );
};

export default Form;
