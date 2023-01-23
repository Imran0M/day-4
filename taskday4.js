
// how to compare two json properties without order?
// use for in loop to the object.
// store a key to new variable
// check whether two keys are equal using if condition. 

let object1={
    name:'hello',
    age:22
}
let object2={   
    age:22,
    name:'hello'
}

for(key in object1){
    var res1=(object1[key])
    console.log(res1)
}
for (key in object2){
    var res2=(object2[key])
    console.log(res2)
}

if(res1==res2){
    console.log('true')
}
else{
    console.log('false')
}
// object1 and object2 not equal by without order.
//output
// false


let countryName = new XMLHttpRequest;
countryName.open("GET", "https://restcountries.com/v3.1/all");
countryName.send();
countryName.onload=function(){
    var countryNameResult = JSON.parse(countryName.response)
    console.log(countryNameResult)
}


// request