import inquirer from "inquirer";
let answers = await inquirer.prompt([{
        type: "string",
        name: "userID",
        message: "Please enter your UserID: "
    }, {
        type: "number",
        name: "userPin",
        message: "Please enter your Pin:"
    }, {
        type: "list",
        name: "accountType",
        choices: ["Current Account", "Saving Account"],
        message: "Please select your account:",
    }, {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        messag: "Please select your transaction type: ",
        when(answers) {
            return answers.accountType;
        },
    }, {
        type: "list",
        name: "amount",
        choices: [5000, 10000, 15000, 20000],
        message: "Please select your amount",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        },
    }, {
        type: "number",
        name: "amount",
        message: "Please enter your amount in PKR:",
        when(answers) {
            return answers.transactionType == "Withdraw";
        },
    }]);
if (answers.userID && answers.userPin) {
    const balance = Math.floor(Math.random() * 100000);
    console.log("Your current balance is", balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("Your remaining balance is", remaining);
    }
    else {
        console.log("Insufficient Balance");
    }
}
