#! /bin/usr/env  node

import inquirer from 'inquirer'

let  todos : string  [] = [];
let condition = true;


while(condition) {
    let todo = await inquirer.prompt(
      [  {
            name : "firstquestion",
            type :'input',
            message :" what you want to add in your Todos ?"
        
        },
        {
            name: "secondquestion",
            type:"confirm",
            message:"would you like to add more in your todos?",
            default: "false",
        }

   ] );

          todos.push(todo.firstquestion);
          condition = todo.secondquestion
          console.log(todos);
       
    }




















    








    