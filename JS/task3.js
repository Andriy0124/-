let d;
let isValidInput = false;

do {
    d = prompt('Введіть цифру:');

    if (d === null) {
        console.log("Введення скасовано.");
        break;
    }

    d = parseInt(d);

    if (!isNaN(d) && d >= 0 && d <= 9) {
        isValidInput = true;
    } else {
        console.log("Введене значення не є цифрою від 0 до 9.");
    }
} while (!isValidInput);

if (isValidInput) {
    let sum = 0;

    for (let i = 100; i < 1000; i++) {
      
        if (i.toString().includes(d)) {
            
            sum += i;
        }
    }

    console.log("Сума трьоцифрових чисел, що містять цифру", d + ":", sum);
}
