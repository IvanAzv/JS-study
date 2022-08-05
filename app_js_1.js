const userName = prompt("Вітаю! Введіть Ваше ім'я")
const userAge = prompt('Скільки Вам рочків?')

if (userAge < 18) {
    alert ('Вибачте, доступ заборонено!')
} else if (userAge >= 18 && userAge <= 22) {
    if(confirm('Ви впенені, що хочете відвідати веб сторінку?'))
        alert('Вітаю, ' + userName + '!')
    else {
        alert('До зустрічі!')
    }
} else if (userAge > 22) {
    alert ('Вітаю, ' + userName + '!')
} else {
    alert ('Введено не вірне значення! Будь ласка, перезавантажте форму')
}
    
    
