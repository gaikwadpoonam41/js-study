//singleton  

//when we create object using constructor it is singleton object

//Object.create

 const mySym =  Symbol("key1")


//+++++++  object literals
const Jsuser = {
    name:"poonam",
    age:30,
    location:"pune",
    [mySym]:"mykey"
};
console.log(Jsuser.name);
console.log(Jsuser['location']); // --> We can declare object this way
console.log(Jsuser[mySym]); //--> symbol defind this way


Jsuser.name="tanmai"
Object.freeze(Jsuser) /// we can freez object overwrite 
Jsuser.name="tgdsdga"
console.log(Jsuser)


//+++++++++1+++++   Singletone object

const userObj = new Object()
console.log(userObj);



//+++++++++++++++++++++++++++++++  Combine object

const obj={1:'test',2:"rdsd"}
const obj2={key:"testing",key2:"ponbas"}
const obj4=Object.assign(obj, obj2) // combine object
console.log("combibe object===>",obj4);



  // +++++++++++++++  using spread oprator

let spread1={...obj, ...obj2}
console.log("using spread cobine object==>",spread1);


  //+++++++++++++++++++++++++++++  combine array

  let arr=[1,2,4,5,6]
  let arr1=[10,11,13]
  let test=[...arr,...arr1]  //==> combine array using spread oprator
  console.log(test);


//+++++++++++++++++++++++++++
  //If there are mutliple object we need to  combine


const obj5={1:'test',2:"rdsd"}
const obj6={key:"poo",key2:"gakwad"}
const obj7={11:'yhjs',21:"redd"}
const obj8={ke3y:"testing",key23:"ponbas"}
const objtest=Object.assign({},obj5, obj6,obj7,obj8) // combine  more than 2  object
//   console.log("combibe object===>",objtest)

  //+++++++++++++++++ hasOwnProperty
  