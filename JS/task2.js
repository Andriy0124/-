let pointAx, pointAy, pointBx, pointBy;

do {
    pointAx = prompt('Введіть координату x для точки A:');
    pointAy = prompt('Введіть координату y для точки A:');

    if (pointAx === null || pointAy === null) {
        console.log('Введення скасовано.');
        break;
    }

    pointAx = parseFloat(pointAx);
    pointAy = parseFloat(pointAy);

    if (isNaN(pointAx) || isNaN(pointAy)) {
        console.log('Введені дані некоректні. Будь ласка, введіть числа.');
    }
} while (isNaN(pointAx) || isNaN(pointAy));

if (pointAx !== null && pointAy !== null) {

    do {
        pointBx = prompt('Введіть координату x для точки B:');
        pointBy = prompt('Введіть координату y для точки B:');

        if (pointBx === null || pointBy === null) {
            console.log('Введення скасовано.');
            break;
        }

        pointBx = parseFloat(pointBx);
        pointBy = parseFloat(pointBy);

        if (isNaN(pointBx) || isNaN(pointBy)) {
            console.log('Введені дані некоректні. Будь ласка, введіть числа.');
        }
    } while (isNaN(pointBx) || isNaN(pointBy));

    if (pointBx !== null && pointBy !== null) {
   
        const distanceA = Math.sqrt(pointAx ** 2 + pointAy ** 2);
        const distanceB = Math.sqrt(pointBx ** 2 + pointBy ** 2);

        if (distanceA > distanceB) {
            console.log("Точка A найвіддаленіша від початку координат.");
        } else if (distanceB > distanceA) {
            console.log("Точка B найвіддаленіша від початку координат.");
        } else {
            console.log("Обидві точки розташовані на однаковій відстані від початку координат.");
        }
    }
}
