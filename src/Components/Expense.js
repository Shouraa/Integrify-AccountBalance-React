import React, { Component } from 'react';

const Expense = (props) => {
    return(
        <ul>
            <h3>Expenses</h3>
            {props.expenses.map((expense,index) => <li className="list" 
            key={index}>{expense.description} -- {expense.amount} &euro; {expense.time}</li>)}       
        </ul>
    );
}

export default Expense;
