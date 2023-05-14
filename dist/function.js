"use strict";
// normal function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
// arrow function
const addArrow = (num1, num2) => num1 + num2;
const arr = [1, 2, 3, 4, 5, 7, 12];
const newArray = arr.map((elem) => elem * elem);
const friends = ["nantu", "nuntu", "muntu"];
const newFriends = ["kuntu", "ubuntu", "suntu"];
friends.push(...newFriends);
console.log(friends);
