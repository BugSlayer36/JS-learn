// 'use strict';

// /*
//     1. the postfix and prefix forms
// */

// let a = 1, b = 1;
// let c = ++a;
// let d = b++;

// // final value of a  = 2 , b = 1 , c = 2 , d = 2

// /*
//     2. Assignment
// */

// let A = 2;
// let X = 1 + (a *= 2);

// console.log(`value of a is ${A}`); // a = 2
// console.log(`value of X is ${X}`); // x = 5

// /*
//     3. Type conversion
// */

// console.log("" + 1 + 0); // 10
// console.log("" - 1 + 0); // -1
// console.log(true + false) // 1
// console.log(6 / "3") // 2
// console.log("2" * "3") // 6
// console.log(4 + 5 + "px") // 9px
// console.log("$" + 4 + 5) // $45
// console.log("4" - 2)//2
// console.log("4px" - 2) // NaN
// console.log("  -9  " + 5) // -9  5
// console.log("  -9  " - 5) // -14
// console.log(null + 1) // null == false == 0 , 0 + 1 = 1
// console.log(undefined + 1) //NaN 
// console.log(" \t \n" - 2) // -2


/*
    4. Fix the addition
*/

let a = prompt("First Number?", 1);
let b = prompt("Secondary Number?", 2);
alert(+a + +b);


