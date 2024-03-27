function isPalindrome(num) {
    return num.toString() === num.toString().split('').reverse().join('');
}

let number;

while (true) {
    number = parseInt(prompt('Введіть початкове число:'));

    if (!isNaN(number)) {
        break;
    } else if (number === null) {
        console.log("Введення скасовано.");
        break; 
    } else {
        console.log("Введено некоректне значення. Будь ласка, спробуйте ще раз.");
    }
}

if (!isNaN(number)) {
    while (true) {
        const square = number ** 2;
        if (isPalindrome(square)) {
            console.log("Число, квадрат якого є паліндромом:", number);
            break;
        }
        number++;
    }
}
