"use strict";
const crush1 = {
    name: "Moina Pakhi",
    age: 22,
    profession: "web developer",
    address: "uganda"
};
const crush2 = {
    name: "Tiya Pakhi",
    age: 22,
    profession: "web developer",
    address: "Dhaka"
};
const isMarried = false;
const calculate = (number1, number2, operation) => {
    return operation(number1, number2);
};
calculate(10, 20, (x, y) => (x + y));
calculate(10, 20, (x, y) => (x - y));
calculate(10, 20, (x, y) => (x * y));
