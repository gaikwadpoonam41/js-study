let obj={
    country:'india',
    location:"pune",
    name:"tanu"
}
console.log(obj.country)

//++++++++++++ We can access object value different way

let {country} =obj;
console.log(country);


  //Or

  let{country: test} = obj
  console.log(test);
  
