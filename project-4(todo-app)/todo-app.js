#! /usr/bin/env node
import inquirer from "inquirer";
let todoApp = [];
let condition = true;
while (condition) {
    let items = await inquirer.prompt([
        {
            name: "todo",
            type: "imput",
            Message: "What you want to add "
        },
        {
            name: "moreItem",
            type: "confirm",
            message: "you want to add anything else?",
            default: "false"
        },
    ]);
    todoApp.push(items.todo);
    condition = items.moreItem;
    console.log(todoApp);
}
