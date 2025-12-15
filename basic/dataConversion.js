let score="33abc"
 let valueNum= Number(score)
console.log(typeof valueNum)  // number
console.log(valueNum)  //NaN


let score1 =null
 let num1= Number(score1)
console.log("value of null-->",num1 )  //0
console.log("value of null-->",score1 ) //null

let score2 = undefined
let num2 = Number(score2)
console.log("undefind value-->",num2)  //NaN

// "33" --> 33
// "33ASA" ==> NaN


let boo= 1
let covBoo= Boolean(boo)
console.log(covBoo)
//   1 => true
//   0 =>  false
// "" => false
//"poonam" => true