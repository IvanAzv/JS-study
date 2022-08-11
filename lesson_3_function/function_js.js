const userNumber1 = +prompt('Введіть перше число');
const userNumber2 = +prompt('Введіть друге число');

const userSign = prompt('Введіть один з операторів',['+,-,*,/']);

function logicalOperation(userNumber1, userNumber2, userSign) {
    if (userSign === '+') {
        return userNumber1 + userNumber2
    } 
    if (userSign === '-') {
        return userNumber1 - userNumber2
    }
    if (userSign === '/') {
        return userNumber1 / userNumber2
    }
    if (userSign === '*') {
        return userNumber1 * userNumber2
    }
    
}

alert (logicalOperation(userNumber1, userNumber2, userSign))