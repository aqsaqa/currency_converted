#! /usr/bin/env node
import inquirer from "inquirer";
const CURRENCY:any ={
    USD: 1,//base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};


let user_answer =await inquirer.prompt( 
    [
        {
            name:'from',
            message:'ENTER FROM CURRENCY',
            type: 'list',
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
        },
        {
            name:'to',
            message:'ENTER TO CURRENCY',
            type: 'list',
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
        },

        {
            name: 'amount',
            message: "ENTER YOUR AMOUNT",
            type: 'number'
        }
    ]
);

let fromAmount = CURRENCY[user_answer.from]
let toAmount = CURRENCY[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount; //USD base currency //4
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);
