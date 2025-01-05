let oneEuroIs = {
    "JPY": 156.5, // Yen japonés
    "USD": 1.07, // Dólar estadounidense
    "GBP": 0.87, // Libra esterlina
};

// Funcion para convertir de euros a dólares
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
};

// Funcion para convertir de dolares a yenes
const fromDollarToYen = function(valueInDollar) {
    const DollarToYen = oneEuroIs.JPY / oneEuroIs.USD;
    let valueInYen = valueInDollar * DollarToYen;
    return valueInYen;
};
// Funcion para convertir de yenes a libra
const fromYenToPound = function(valueInYen) {
    const YenToPound = oneEuroIs.GBP / oneEuroIs.JPY;
    let valueInPound = valueInYen * YenToPound;
    return valueInPound;
};
// Exportamos las funciones
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };