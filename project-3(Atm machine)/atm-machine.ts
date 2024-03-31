#! /usr/bin/env node

import inquirer from "inquirer";

let accountbalance = 50000;
let pincode = 1234;
let passward = await inquirer.prompt([
   {
      name: "pin",
      type: "number",
      message: "enter you pin code"
   }
])




if (passward.pin === pincode) {
   console.log("Your pin code is correct!!!")

   let options = await inquirer.prompt([
      {
         name: "options",
         type: "list",
         Message: "choice a option",
         choices: ["withdrawal", "balance check",]

      }
   ]);
   if (options.options === "withdrawal") {
      let amount = await inquirer.prompt([
         {
            name: "amount",
            type: "list",
            message: "enter amount",
            choices: ["500", "1000", "3000", "5000", "1000", "15000", "otheramount"]
         },

      ]);



      if (amount.amount === "otheramount") {
         let otheramount = await inquirer.prompt([
            {
               name: "otheramount",
               type: "number",
               message: "enter amount you want"
            }
         ])
         if (otheramount.otheramount < accountbalance) {
            accountbalance -= otheramount.otheramount
         }else{
            console.log("invalid amount entered")
         }
      } else {
         accountbalance -= amount.amount
      }
      console.log(`amount in your account is ${accountbalance}`)

   } else if (options.options === "balance check") {
      console.log(`Your balance is ${accountbalance}`);

   }
}

else {
   console.log("Your pin code is incorrect");

}
























// let customamount = await inquirer.prompt([
//    {
//       name:"enter custom amount",
//       type:"number",
//       message:"enter custom amount"
//    }
// ])
