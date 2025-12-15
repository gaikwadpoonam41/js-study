// Primitive datatype

//  String , number, boolean, null, undefind, bigInt, symbol


// Reference (non-primitive datatype)
// function , Array, object

//All non primitive datatype  is object
let arr =[1,2,2]
console.log(typeof arr) //object



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Heap, stack memory
//stack memeory used for primitive datatype
// In primitive data type it will provide copy of variable


let val ="poonam"
let val1 =val
console.log(val)
console.log(val1)


//Heap  memmory
//Heap memory will used for non primitive data type
// it will provide reference of variable
  

let obj ={
    email:"poonam@gmail.com",
    address:"pune"
}

let obj1= obj
console.log(obj)
console.log(obj1)
obj1.email="test@gmail.com"
console.log(obj1)
console.log(obj)

