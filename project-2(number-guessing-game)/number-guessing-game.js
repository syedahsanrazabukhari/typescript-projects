#! /usr/bin/env node
import inqurier from "inquirer";
console.log("your welcome in my game");
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inqurier.prompt([
    {
        message: "guess a number between 1 to 10:",
        type: "number",
        name: "userguessednumber",
    },
]);
if (answer.userguessednumber === randomNumber) {
    console.log("Right answer! You win.");
}
else {
    console.log(`You failed! The correct number was ${randomNumber}`);
}
