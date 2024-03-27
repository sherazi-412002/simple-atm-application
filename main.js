#! /usr/bin/env node 
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 820026;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin number?",
    type: "number",
});
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!");
    let operationAnswer = await inquirer.prompt({
        name: "operation",
        message: "Please select option.",
        type: "list",
        choices: ["withdraw", "check balance", "fast cash"],
    });
    if (operationAnswer.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount?",
                type: "number",
            },
        ]);
        myBalance -= amountAns.amount;
        if (amountAns.amount <= myBalance) {
            console.log(`Your remaining balance is:  ${myBalance}`);
        }
        else {
            console.log("Insufficient balance");
        }
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(`Your current balance is: ${myBalance}`);
    }
    else if (operationAnswer.operation === "fast cash") {
        console.log("Choose cash amount for withdraw.");
        let cashAmountAns = await inquirer.prompt({
            name: "cashAmount",
            message: "Please select your cash amount option.",
            type: "list",
            choices: ["1000", "5000", "10000", "15000"]
        });
        if (cashAmountAns.cashAmount === "1000") {
            console.log(`Your current balance is:  ${myBalance -= 1000}`);
        }
        else if (cashAmountAns.cashAmount === "5000") {
            console.log(`Your current balance is:  ${myBalance -= 5000}`);
        }
        else if (cashAmountAns.cashAmount === "10000") {
            console.log(`Your current balance is:  ${myBalance -= 10000}`);
        }
        else if (cashAmountAns.cashAmount === "15000") {
            console.log(`Your current balance is:  ${myBalance -= 15000}`);
        }
    }
}
else {
    console.log("Incorrect pin number.");
}
