//Factorial of number is the product of all positive descending integers. 
// Find the factorial of a number given any number
// n!=1*2*3*4...



function factorial (number){
    let factorial = 1;
    for(let i =1; i <= number; i++){
        factorial *= i;
    }
    return factorial;
}

console.log(`El valor Factorial es ${factorial(5)}`);
console.log(`El valor Factorial es ${factorial(6)}`);
console.log(`El valor Factorial es ${factorial(7)}`);
console.log(`El valor Factorial es ${factorial(8)}`);
console.log(`El valor Factorial es ${factorial(9)}`);
console.log(`El valor Factorial es ${factorial(10)}`);

