import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import BalanceContaianer from './Components/BalanceContainer';



class App extends Component {
state = {
      description: "",
      amount: "",
      addType: "Income",
      incomes: [],
      expenses: [],
      balance: 0
    };

  displayDateTime = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
  
  if(hours < 10){
    hours = '0' + hours;
  }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
  
    let dateMonthYear = date + '.' + month + '.' + year
    let time = hours + ':' + minutes
    let fullTime = dateMonthYear + ' ' + time
    return fullTime
  }

  handleDescriptionChange =(e)=> {
    e.preventDefault();
    this.setState({description: e.target.value});
  }

  handleAmountChange = (e) => {
    this.setState({amount: e.target.value});
  }

  handleAddType =(e) => {
    this.setState({addType: e.target.value});
  }

  addItem =()=>{
    let arr1 = this.state.incomes;
    let arr2 = this.state.expenses;
 
    if(this.state.addType === 'Income'){      
      arr1.push(
        {
          description : this.state.description,
          amount : this.state.amount,
          time : this.displayDateTime()
        });
      this.setState({incomes:arr1});
    } else if(this.state.addType==='Expense'){
      arr2.push({
        description : this.state.description,
        amount : this.state.amount,
        time:this.displayDateTime()
      });
      this.setState({expenses:arr2});
    }
    this.setState({description: ""});
    this.setState({amount:""})
    this.calculateBalance();
 }
 calculateBalance =() => {
  let totalIncome = 0;
  let totalExpense = 0;
  let balance;

   this.state.incomes.map(income => {
     totalIncome = totalIncome + parseFloat(income.amount);
   });

   this.state.expenses.map(expense => {
    totalExpense= totalExpense+ parseFloat(expense.amount);

  });

  balance = totalIncome - totalExpense;

    this.setState({
      balance:balance
    })
    }

  render() {
    console.log(this.state.incomes);
    console.log(this.state.expenses);
    
    
    return (
      <div className="App">
      <Header title = "Account Balance" />
      
      <Form
      description = {this.state.description}
      handleDescriptionChange = {this.handleDescriptionChange}

      amount = {this.state.amount}
      handleAmountChange = {this.handleAmountChange} 

      addType = {this.state.addType}
      handleAddType = {this.handleAddType} 

      addItem = {this.addItem}
      />
      
      <BalanceContaianer 
      incomes = {this.state.incomes}
      expenses = {this.state.expenses} 
      balance={this.state.balance}
    />
      
      </div>
    );
  }
}

export default App;
