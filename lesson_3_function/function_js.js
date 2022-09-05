let userNumber1 = +prompt('Введіть перше число');

let userNumber2 = +prompt('Введіть друге число');

while (isNaN(userNumber1 && userNumber2)) {
    alert('Ви ввели не вірне значення, спробуйте ще раз');
    userNumber1 = +prompt('Введіть перше число');
    userNumber2 = +prompt('Введіть друге число');
}

// не можу зрозуміти як повернутись на початок коду, 
// якщо введене значення не вірне

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