// Функции - это часть какого либо кода который выполняет действие или вычисление и его можно использовать в любом месте вашего кода

// function declarion

// function anyname() {
    
//     let sum = 10 + 30;
//     return sum
// }

// console.log(anyname());

// function expression
   
// let res = function () {
//     let sum = 10 + 30;
//     return sum
// }

// console.log(res());

// function param(a,b,c,d) {
//     let sum = a + b + c 
//     return sum
// }
// console.log(param(10,20,30));

// function all(min,max) {
//     let sum = 0;
//     for(let i = min; i < max; i++){
//         sum = sum + i
//     }
//     return sum
// }
// console.log(all(1,10));


// let number = Math.floor(Math.random() * 10 );
// console.log(number);

// math.random - отдаёт рандомное число от 0 до 0,9999
// math.floor - округляет наше число до наименьшего целого
// math.ceil - округляет наше число до наибольшего целого
// math.round - округляет наше число по матем правилам

function rand(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}
// console.log(rand(50,100));

// let minNumber = +prompt('min number');
// let maxNumber = +prompt('max number');

// for(let i = 1; i < 5; i++){
//     let one = rand(minNumber,maxNumber); 
//     let two = rand(maxNumber,maxNumber);
//     let primer = +prompt(one + ' + ' + two + ' = ')
//     let word = primer == (one + two) ? 'Good job!' : 'Looser!'
//     alert(one + ' + ' + two + ' = ' + (one + two) + ' your answer ' + primer + ', ' + word)
// }


let nm = prompt('Insert your name');
let current = prompt('Insert the current year');
let year = prompt('Insert the year you were born in');
function calculus (min, max) {
    let age = current - year;
    
    return (age);
    
}
alert(nm + ' , you are ' + calculus(current,year) + ' !');

let number = +prompt('Insert the amount of problems you want to be generated');

for(let i = 0; i < number; i++){
    let operator = '+-*/'[Math.floor(Math.random() * 4)]
    let one = rand(1,1000); 
    let two = rand(1,1000);
    let primer = +prompt(one + ' ' + operator + ' ' + two + ' = ')
    let result = 0 ;
    switch (operator) {
        case '+':
            result = one + two;
            break;
        case '-':
            result = one - two;
            break;
        case '*':
            result = one * two;
            break;
        case '/':
            result = one / two;
            break;
    }
    let word = primer == result ? 'Right answer! ' + result : 'Your answer is wrong! The correct answer is ' + result
    console.log(word)}