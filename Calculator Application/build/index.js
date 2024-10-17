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
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function question(query) {
    return new Promise(resolve => rl.question(query, resolve));
}
function calculate() {
    return __awaiter(this, void 0, void 0, function* () {
        while (true) {
            console.log("Calculator App \n 1.Add  \n 2.Subtract \n 3.Multiplication \n 4.Division  and other to exit");
            const input = yield question("Enter ur choice :");
            if (Number(input) < 5 && Number(input) > 0) {
                const num1 = yield question("Enter the first number: ");
                const num2 = yield question("Enter the second number: ");
                switch (input) {
                    case '1':
                        console.log(`the sum ${Number(num1)} of ${Number(num2)} is  ${Number(num1) + Number(num2)}`);
                        break;
                    case '2':
                        console.log(`the subtraction ${Number(num1)} of ${Number(num2)} is  ${Number(num1) - Number(num2)}`);
                        break;
                    case '3':
                        console.log(`the multiplication ${Number(num1)} of ${Number(num2)} is  ${Number(num1) * Number(num2)}`);
                        break;
                    case '4':
                        if (Number(num1) == 0 || Number(num2) == 0)
                            console.log("the number u entered will result in loop ");
                        console.log(`the division ${Number(num1)} of ${Number(num2)} is  ${Number(num1) / Number(num2)}`);
                }
            }
            else {
                break;
            }
        }
    });
}
calculate();
