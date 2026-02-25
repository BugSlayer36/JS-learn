/*
    1. Check the range between
    Write an if condition to check that age is between 14 and 90 inclusively.
    “Inclusively” means that age can reach the edges 14 or 90.
*/

let userRole = prompt("Login", '');

if (userRole == 'Admin') {
    let password = prompt('Enter your password', '');
    alert(!password ? 'Canceled' : password == 'TheMaster' ? 'Welcome' : 'Wrong Password');
} else {
    alert(!userRole ? 'Cancled' : 'I dont know you')
}