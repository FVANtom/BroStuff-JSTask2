// To find the average of two numbers
var firstNumber, secondNumber, answer;
firstNumber = window.prompt('Enter number 1', '');
firstNumber = parseFloat(firstNumber);
secondNumber = window.prompt('Enter number 2', '');
secondNumber = parseFloat(secondNumber);
answer = firstNumber + secondNumber / 2;
document.write ('The average of'+ firstNumber + secondNumber +' is ' + answer );