import React, { Component } from "react";

const Form = props => {
  const isDisabled = props.isSubmitDisabled();
  return (
    <form className="inputBar" id="inputBar" onSubmit={props.addItem}>
      <input
        id="description"
        type="text"
        placeholder="Description"
        value={props.description}
        onChange={props.handleDescription}
      />
      <input
        id="amount"
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

      <button className="btn" type="submit" disabled={isDisabled}>
        ADD
      </button>
    </form>
  );
};

export default Form;
