import React, { Component } from 'react';

const Income = (props) => {
    return(
        <ul>
            <h3>Incomes</h3>
            {props.incomes.map((income,index) => <li className="list" 
            key={index}><p> {income.description} -- {income.amount} &euro; "{income.time}"</p></li>)}
        </ul>
    );
}

export default Income;