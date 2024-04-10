#! /usr/bin/env node
import inquirer from "inquirer";
const randNum = Math.floor(Math.random() * 10 + 1);
const ans = await inquirer.prompt([
    {
        name: "userGuessedNum",
        type: "number",
        message: "Enter a number between 1 - 10: ",
    },
]);
if (ans.userGuessedNum === randNum) {
    console.log("Congrats! you got it right.");
}
else {
    console.log("Sorry! you got it wrong.");
}
