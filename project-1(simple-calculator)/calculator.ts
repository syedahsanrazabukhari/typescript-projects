#! /usr/bin/env node

import inqurier from "inquirer";

const answer = await inqurier.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "Enter second number", type: "number", name: "secondnumber" },
    {
        message: "Choose the operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);

if (answer.operator === "addition") {
    console.log(`${answer.firstnumber} + ${answer.secondnumber} = ${answer.firstnumber + answer.secondnumber}`);
}
else if (answer.operator === "subtraction") {
    console.log(`${answer.firstnumber} - ${answer.secondnumber} = ${answer.firstnumber - answer.secondnumber}`);
}
else if (answer.operator === "multiplication") {
    console.log(`${answer.firstnumber} x ${answer.secondnumber} = ${answer.firstnumber * answer.secondnumber}`);
}
else if (answer.operator === "division") {
    console.log(`${answer.firstnumber} / ${answer.secondnumber} = ${answer.firstnumber / answer.secondnumber}`);
}
else {
    console.error("number is undefined");
}