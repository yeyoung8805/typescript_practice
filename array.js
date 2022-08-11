"use strict";
//Tuple
let x;
x = ["hello", 39];
// x = [10, "Mark"]; // Error
// x[3] = "world";  // Type '"world"' is not assignable to type 'undefined'. Tuple type '[string, number]' of length '2' has no element at index '3'.
const person = ["Mark", 39];
const [] = person; //Destructuring
