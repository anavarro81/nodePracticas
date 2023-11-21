// 0, 1, 1, 2, 3, 5, 8, 13, 21
const fs = require('node:fs');

let num = 0;

let numeros = []
let totalNum = 9;

for (let index = 0; index < totalNum-1; index++)  {

    if (index < 2) {
        numeros.push(num)
        num+=1;
    } else {
        num = numeros[index-1] + numeros[index-2]
        numeros.push(num)
    }

    
    
}

let fibonacciString = numeros.join ('\n');


console.log(numeros)

fs.writeFile('fibonacci.txt', fibonacciString, (error) => {
    if (error)
        console ('Error', error)
})