import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.red("hafsa"));
const firstNumber = await inquirer.prompt([{ name: "firstNumber", type: "number", message: "Enter your first number" }]);
console.log(firstNumber);
const secondNumber = await inquirer.prompt([{ name: "secondNumber", type: "number", message: "Enter your second number" }]);
console.log(secondNumber);
const operation = await inquirer.prompt([{ name: "operation", type: "list", choices: ["+", "-", "/", "*", "%"], message: "Select the operation you wanna perform" }]);
console.log(operation);
if (operation.operation === "+") {
    var sum = firstNumber.firstNumber + secondNumber.secondNumber;
    console.log("The sum of given numbers is=", sum);
}
else if (operation.operation === "-") {
    var diff = firstNumber.firstNumber - secondNumber.secondNumber;
    console.log("The diff of given numbers is=", diff);
}
else if (operation.operation === "/") {
    var division = firstNumber.firstNumber / secondNumber.secondNumber;
    console.log("The division of given numbers is=", division);
}
else if (operation.operation === "*") {
    var product = firstNumber.firstNumber * secondNumber.secondNumber;
    console.log("The product of given numbers is=", product);
}
else if (operation.operation === "%") {
    var modulus = firstNumber.firstNumber % secondNumber.secondNumber;
    console.log("The modulus of given numbers is=", modulus);
}
else {
    console.log("Invalid input");
}
