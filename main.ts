#! /usr/bin/env node

import inquirer from "inquirer";

//storing variables for current balance and  my pin code
let myBalance: number = 20000;
let myPin: number = 820026;

//for taking data from user we make another variable
let pinAnswer = await inquirer.prompt({
  name: "pin",
  message: "Enter your pin number?",
  type: "number",
});

//if our pin code correct than,
// for next question we make another variable in which we add two options that are withdraw and check balance
if (pinAnswer.pin === myPin) {
  console.log("Correct pin number!");

  let operationAnswer = await inquirer.prompt({
    name: "operation",
    message: "Please select option.",
    type: "list",
    choices: ["withdraw", "check balance"],
  });


  //if we select first option i,e. withdraw. 
  //now we make again new variable with promt to ask another question
  //in which we add agin  two options

  if (operationAnswer.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount?",
        type: "list",
        choices: ["Enter your amount", "fast cash"],
      },
    ]);

    //if in withdraw  we select first option that is enter your amout
    //than we make another variable with prompt to take amount value from user

    if (amountAns.amount === "Enter your amount") {
      let amountValue = await inquirer.prompt([
        {
          name: "value",
          message: "Enter your amount for withdraw.",
          type: "number",
        },
      ]);
      let myBalance2 = myBalance - amountValue.value;
      //if value is greater than our amount balance for this we make if else condition
      //when value is in our balance  limit than if  is executed otherwise else
      if (amountValue.value <= myBalance) {
        console.log(`Your remaining balance is:  ${myBalance2}`);
      } else {
        console.log("Insufficient balance");
      }
    } 
    
    //if in withdraw we slect second option that is fast cash 
    //than we make another prompt question with different list option

    else if (amountAns.amount === "fast cash") {
      console.log("Choose cash amount for withdraw.");
      let cashAmountAns = await inquirer.prompt({
        name: "cashAmount",
        message: "Please select your cash amount option.",
        type: "list",
        choices: ["1000", "5000", "10000", "15000"],
      });
      if (cashAmountAns.cashAmount === "1000") {
        console.log(`Your current balance is:  ${(myBalance -= 1000)}`);
      } else if (cashAmountAns.cashAmount === "5000") {
        console.log(`Your current balance is:  ${(myBalance -= 5000)}`);
      } else if (cashAmountAns.cashAmount === "10000") {
        console.log(`Your current balance is:  ${(myBalance -= 10000)}`);
      } else if (cashAmountAns.cashAmount === "15000") {
        console.log(`Your current balance is:  ${(myBalance -= 15000)}`);
      }
    }
  } 
  
  //after correct pin code if we select second option than this code will be executed
  
  else if (operationAnswer.operation === "check balance") {
    console.log(`Your current balance is: ${myBalance}`);
  }
} 

// if select wrong pin code than this will be executed


else {
  console.log("Incorrect pin number.");
}
