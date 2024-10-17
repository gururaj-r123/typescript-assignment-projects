const readline=require('readline')






const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(query: string): Promise<string> {
    return new Promise(resolve => rl.question(query, resolve));
}


async function calculate(){
    while(true)
    {
        console.log("Calculator App \n 1.Add  \n 2.Subtract \n 3.Multiplication \n 4.Division  and other to exit")
        const input=await question("Enter ur choice :")

        if(Number(input)<5 && Number(input)>0)
        {
            const num1=await question("Enter the first number: ")
        const num2=await question("Enter the second number: ")
        switch(input)
        {
            case '1':
                console.log(`the sum ${Number(num1)} of ${Number(num2)} is  ${Number(num1)+Number(num2)}`)
                break;
                case '2':
                    console.log(`the subtraction ${Number(num1)} of ${Number(num2)} is  ${Number(num1)-Number(num2)}`)
                    break;
                    case '3':
                        console.log(`the multiplication ${Number(num1)} of ${Number(num2)} is  ${Number(num1)*Number(num2)}`)
                        break;
                        case '4':
                            if(Number(num1)==0||Number(num2)==0)
                                console.log("the number u entered will result in loop ")
                            console.log(`the division ${Number(num1)} of ${Number(num2)} is  ${Number(num1)/Number(num2)}`)
            
        }

        }
        else{
            break;
        }
        

        
    }
    
    
    
}

calculate()