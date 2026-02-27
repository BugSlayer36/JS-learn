/*
    1. Last loop value
    what is the last value alerted by this code ? why?
*/

// let i = 3;
// while (i) {
//     alert(i--);
// }

// The last value alerted is 1 because when i becomes 0, the condition in the while loop is false , so the loop stops and no more alert are shown.

/*
    2.output even numbers in the loops
*/
// let i = 2;
// for (i; i <= 20; i += 2) {
//     console.log(i);
// }

/*
    3. Replace "for" with "while"
    Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
    for (let i = 0; i < 3; i++) {
        alert( `number ${i}!` );
    }
*/

// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//     ++i;
// }


/*
    4. Repeat until the input is correct
    Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
    The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
    Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
*/

// let userInput;

// outer: do {
//     if (userInput < 100) {
//         alert('Please enter the number greater or equal than 100!');
//     }
//     userInput = prompt("Please enter the number greater or equal than 100: ", '101');
//     if (!userInput) break outer;
// } while (userInput < 100);

/*
   5. Output prime numbers
    An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
    In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
    For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
    Write the code which outputs prime numbers in the interval from 2 to n.
    For n = 10 the result will be 2,3,5,7.
    P.S. The code should work for any n, not be hard-tuned for any fixed value.
*/
let n = prompt("Please enter N: ", '');

for (let i = 2; i <= n; i++) {
    let result = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            result = false;
            break;
        }
    }
    if (result) {
        console.log(i);
    }
}