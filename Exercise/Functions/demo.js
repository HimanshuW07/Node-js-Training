// program to find the largest among three numbers

// take input from the user
const num1 = prompt("Enter first number: ");
const num2 = prompt("Enter second number: ");
const num3 = prompt("Enter third number: ");
let largest;


// check the condition
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

// display the result
console.log("The largest number is " + largest);