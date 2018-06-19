import React, { Component } from 'react';
import Income from './Income';
import Expense from './Expense';
import Balance from './Balance';

const BalanceContaianer = (props) => {
    return(
        <div className="container">
            <div className="income">
                <Income incomes = {props.incomes} />    
            </div>
            <div className="expense">
                <Expense expenses = {props.expenses}/>
            </div>
            <div className="balance">
                <Balance balance={props.balance} />
            </div>
        </div>
    );
}

export default BalanceContaianer;