let str="tanu"
console.log(str[0])

console.log(str.charAt(1))//it will check which charcter of that position

console.log("index of t==>",str.indexOf('t')) // At which position  't' is present

const newStr="poonam"
console.log(newStr.substring(0,4)) // we need to give start  and end character

//++ slice
let newStr1=newStr.slice(1,3)
console.log(newStr1)


//+++  replace
let test = "https://poonamGaikwad%21gmail"
console.log(test.replace("%21",'_'))