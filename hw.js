
/*
// ht-1

function sumOfTwoNumber(num1, num2){

console.log(num1, num2)
    return num1 + num2
}

let result1 = sumOfTwoNumber(2, 3)
let result2 = sumOfTwoNumber(4, 4)
let result3 = sumOfTwoNumber(-2, 4)

console.log(result1)
console.log(result2)
console.log(result3)
*/

/*
// ht-2

function checkNumber(num1){
    return num1 > 0 ? "Positive" : num1 < 0 ? "Negative" : "Zero"

}
console.log(checkNumber(5))
console.log(checkNumber(-8))
console.log(checkNumber(0))
*/


// ht-3

function generateMultiplicationTable(num1){

    for(let i = 1; i <= 10; i++){

     console.log( num1 + " x " + i + " = " + (num1*i))
    }

}

 generateMultiplicationTable(9)    
 

/*
// ht-4
 function endNine(num1)
 {
    let res = num1 % 10
   if(res == 9){
    return "true"
   }
   else{
    return "false"
   }
}
 console.log(endNine(23512))
    
*/


// ht - 5
/*
function century(num1){
    
    return num1 / 100
}
console.log(Math.ceil( century(101)))*/