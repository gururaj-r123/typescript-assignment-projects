"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const rows = 10; // Number of rows
const cols = 10; // Number of columns
const initialValue = false; // Value to fill the array with
const readline = require('readline');
let booleanArray = [];
let count = 0;
// Fill the array using nested loops
for (let i = 0; i < rows; i++) {
    booleanArray[i] = [];
    for (let j = 0; j < cols; j++) {
        booleanArray[i][j] = initialValue;
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// rl.question("enter ur name",(value:string)=>{
//     console.log(value)
// })
app();
function app() {
    return __awaiter(this, void 0, void 0, function* () {
        while (true) {
            console.log("Welcome to the Theatre Booking System");
            console.log(`There are ${rows * cols} seats in the theatre`);
            console.log(`Please enter rows between 10 and colums between 10`);
            console.log("Enter 1 to book a seat, 2 to cancel a booking, or 0 to exit.");
            try {
                const choice = yield question("Enter your choice: ");
                if (choice === "1") {
                    book();
                }
                else if (choice === "2") {
                    yield cancel();
                }
                else if (choice === "0") {
                    console.log("Exiting the system. Goodbye!");
                    rl.close();
                    return;
                }
                else {
                    console.log("Enter a proper input.");
                }
            }
            catch (err) {
                console.log(err);
            }
        }
    });
}
function question(query) {
    return new Promise(resolve => rl.question(query, resolve));
}
function book() {
    return __awaiter(this, void 0, void 0, function* () {
        const row = yield question("enter the row");
        const col = yield question("enter the col");
        if (booleanArray[Number(row)][Number(col)]) {
            console.log("Sorry the seat has already been booked");
        }
        else {
            booleanArray[Number(row)][Number(col)] = true;
            console.log(`ur booking has been confirmed  and the seat is in  ${row} row ${col} col`);
        }
        console.log("-------------------------------------------------------");
        app();
    });
}
function cancel() {
    return __awaiter(this, void 0, void 0, function* () {
        const row = yield question("enter the row ");
        const col = yield question("enter the col ");
        if (!booleanArray[Number(row)][Number(col)])
            console.log("The Seat isn't booked to cancel");
        else {
            booleanArray[Number(row)][Number(col)] == false;
            console.log(`ur booking has been canceled  for  the seat  in  ${row} row ${col} col`);
        }
        console.log("-------------------------------------------------------");
        app();
    });
}
