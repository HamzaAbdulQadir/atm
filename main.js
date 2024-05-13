import inquirer from "inquirer";
let myBalance = 10000;
console.log("my balance is " + myBalance);
let myPin = 7867;
let userInput = await inquirer.prompt([{
        name: "pinCode",
        type: "number",
        message: "enter your pincode"
    }]);
if (userInput.pinCode === myPin) {
    let operationInput = await inquirer.prompt([{
            name: "operation",
            type: "list",
            message: "please select choices",
            choices: ["withdraw", "checkBalance"]
        }]);
    if (operationInput.operation === "withdraw") {
        let useramount = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "enter withdraw amount"
            }]);
        console.log("you withdraw " + useramount.amount);
        myBalance -= useramount.amount;
        console.log("your remaining amount is " + myBalance);
    }
    else if (operationInput.operation === "checkBalance") {
        console.log("your balance is: " + myBalance);
    }
}
else {
    console.log("enter correct pincode");
}
