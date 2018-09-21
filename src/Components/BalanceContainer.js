import React from "react";
import Income from "./Income";
import Expense from "./Expense";
import Balance from "./Balance";

const BalanceContaianer = props => {
  return (
    <div className="container">
      <div className="income inExGrid">
        <Income incomes={props.incomes} handleDelete={props.handleDelete} />
      </div>
      <div className="expense inExGrid">
        <Expense expenses={props.expenses} handleDelete={props.handleDelete} />
      </div>
      <div className="balance">
        <Balance balance={props.balance} />
      </div>
    </div>
  );
};

export default BalanceContaianer;
