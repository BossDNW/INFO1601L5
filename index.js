let name = "Bob";
let age = 24;
console.log("------------------------------------------------")
console.log(typeof(name))
console.log(typeof(age))
console.log("------------------------------------------------")
console.log(`Hello my name is ${name}, I'm ${age} years old`)
console.log(`I was born in ${2025-age}`)
console.log("------------------------------------------------")
console.log('1' == 1);
console.log(1 == true);
console.log("false" == false);
console.log("false" == true);

if("false")
   console.log("Hello false!")

console.log("------------------------------------------------")
console.log('1' === 1);
console.log(1 === true);
console.log("true" === true);

console.log("------------------------------------------------")
let grade = 67;

if( grade < 50){
   console.log('Failed');
}else{
   console.log('Passed');
}

console.log("------------------------------------------------")
let num =0;

while(num < 10){
  console.log(num);
  num++;
}

for(let i=0; i <10; i ++){
  console.log(i);
}

console.log("------------------------------------------------")
for (let x=1;x<=50;x++){
  if ((x%3 === 0) && (x%5 === 0)){
    console.log("fizzbuzz")
  }else if (x%3 === 0){
    console.log("fizz")
  }else if (x%5 === 0){
    console.log("buzz")
  }else{
    console.log(x)
  }
}