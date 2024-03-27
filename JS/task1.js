let number;

do {
    number = prompt('Введіть чотирицифрове натуральне число:');
    if (number === null) {
        console.log('Введення скасовано.');
        break;
    }

    if (number.length !== 4 || isNaN(number)) {
        console.log('Введені дані некоректні. Будь ласка, введіть чотирицифрове натуральне число.');
    } else {
        const stringWithoutMiddleDigits = number.charAt(0) + "__" + number.charAt(3);
        console.log("Результат:", stringWithoutMiddleDigits);
        break;
    }
} while (true);
