// Importamos las funciones desde app.js
const { fromEuroToDollar, fromDollarToYen } = require('./app.js');

// Test para la conversión de euros a dólares
test("One euro should be 1.07 dollars", function () {
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 3.5 euros = 3.745 dólares
});

// Test para la conversión de dólares a yenes
test("Un dolar son 146.2 yenes", function () {
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(1)).toBeCloseTo(146.26); // 1 dolar convertidos a yenes
});

test("Un yen equivale a 0.00556 libras", function () {
    const { fromYenToPound } = require('./app.js');
   expect(fromYenToPound(1)).toBeCloseTo(0.00556); //1 Yen convertido a libras
})
   


