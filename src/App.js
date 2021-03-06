import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Form from "./Components/Form";
import BalanceContaianer from "./Components/BalanceContainer";

class App extends Component {
  state = {
    description: "",
    amount: "",
    addType: "Type",
    incomes: [],
    expenses: [],
    balance: 0,
    errorMsg: "Mess"
  };

  //Handlers
  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  handleAmountChange = e => {
    this.setState({ amount: e.target.value });
  };

  handleAddType = e => {
    this.setState({ addType: e.target.value });
  };

  isSubmitDisabled = () => {
    return this.state.errorMsg !== "";
  };

  validate = () => {
    const descriptionRegex = /^[A-Za-z]+$/;
    if (
      !descriptionRegex.test(this.state.description) ||
      this.state.description === " "
    ) {
      this.setState({
        errorMsg: "Fill the description!"
      });
    } else {
      this.setState({
        errorMsg: ""
      });
    }
    console.log(this.state.errorMsg);
  };

  handleDescription = e => {
    this.handleDescriptionChange(e);
    this.validate();
    console.log("is submit disabled", this.isSubmitDisabled());
  };

  //Getting the time
  displayDateTime = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let dateMonthYear = date + "." + month + "." + year;
    let time = hours + ":" + minutes;
    let fullTime = dateMonthYear + " " + time;
    return fullTime;
  };

  //Adding items
  addItem = e => {
    e.preventDefault();
    let arr1 = this.state.incomes;
    let arr2 = this.state.expenses;

    if (this.state.addType === "Income") {
      arr1.push({
        description: this.state.description,
        amount: this.state.amount,
        addType: this.state.addType,
        time: this.displayDateTime()
      });
      this.setState({
        incomes: arr1
      });
    } else if (this.state.addType === "Expense") {
      arr2.push({
        description: this.state.description,
        amount: this.state.amount,
        addType: this.state.addType,
        time: this.displayDateTime()
      });
      this.setState({
        expenses: arr2,
        balance: this.calculateBalance2(arr1, arr2)
      });
    }
    this.setState({
      description: "",
      amount: "",
      addType: "Type"
    });
  };

  //Deleting items
  deleteItem = (addType, index) => {
    let arr1 = [...this.state.incomes];
    let arr2 = [...this.state.expenses];

    if (addType === "Income") {
      arr1.splice(index, 1);
      this.setState({
        incomes: arr1,
        balance: this.calculateBalance2(arr1, arr2)
      });
    } else if (addType === "Expense") {
      arr2.splice(index, 1);
      this.setState({
        expenses: arr2,
        balance: this.calculateBalance2(arr1, arr2)
      });
    }
  };

  //Editing Items
  editItem = index => {
    let incomeArr = this.state.incomes;
  };

  //Calculating the sum
  calculateBalance2 = (incomesList, expensesList) => {
    let totalIncome = 0;
    let totalExpense = 0;
    incomesList.map(income => {
      totalIncome = totalIncome + parseFloat(income.amount);
    });

    expensesList.map(expense => {
      totalExpense = totalExpense + parseFloat(expense.amount);
    });
    return totalIncome - totalExpense;
  };

  render() {
    console.log(this.state.incomes);
    console.log(this.state.expenses);

    return (
      <div className="">
        <Header title="Account Balance App" />

        <Form
          description={this.state.description}
          handleDescription={this.handleDescription}
          amount={this.state.amount}
          handleAmountChange={this.handleAmountChange}
          addType={this.state.addType}
          handleAddType={this.handleAddType}
          addItem={this.addItem}
          isSubmitDisabled={this.isSubmitDisabled}
        />

        <BalanceContaianer
          incomes={this.state.incomes}
          expenses={this.state.expenses}
          balance={this.state.balance}
          handleDelete={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;

// calculateBalance = () => {
//   let totalIncome = 0;
//   let totalExpense = 0;
//   let balance;

//   this.state.incomes.map(income => {
//     totalIncome = totalIncome + parseFloat(income.amount);
//   });

//   this.state.expenses.map(expense => {
//     totalExpense = totalExpense + parseFloat(expense.amount);
//   });

//   balance = totalIncome - totalExpense;

//   this.setState({
//     balance: balance
//   });
// };

// const descriptionInput = document.querySelector("#description");
// const amountInput = document.querySelector("#amount");
// const inputBar = document.querySelector("#inputBar");
// let msg = "";
// const descriptionRegex = /^[A-Za-z]+$/;

//checking the valid input for description input

// if (
//   !this.state.description ||
//   this.state.description == " " ||
//   !descriptionRegex.test(this.state.description)
// ) {
//   msg = msg + " Description!";
// }
// console.log(msg);

// if (msg !== "") {
//   this.setState({
//     errorMsg: msg
//   });
//   inputBar.classList.add("invalid");
// } else {
//   descriptionInput.classList.remove("invalid");
//   inputBar.classList.remove("invalid");
//   this.setState({
//     errorMsg: ""
//   });
// }
//Adding to the arrays
