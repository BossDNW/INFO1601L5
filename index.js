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

console.log("------------------------------------------------")
let nowTimestamp = Date.now();

console.log(nowTimestamp);

let now = new Date(nowTimestamp);

let date = new Date(2019, 11, 17, 3, 24, 0);

console.log(date.toLocaleDateString("en-US"));

console.log(` ${now.getDate()} - ${now.getMonth() + 1} - ${now.getFullYear()} `); // 9 - 2 - 2020 

let difference = now - date;


let daysBetween = difference * 1.15741e-8;
console.log(daysBetween);

let root = Math.sqrt(9);

let cubed  = Math.pow(2, 3);

let roundDown = Math.floor(12.3453);

let roundUp = Math.ceil(12.3453);

let absolute = Math.abs(-34);

let randNum = Math.random();

let pi = Math.pi;

function randInt(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log("------------------------------------------------")
function hello(){
  console.log("Hello");
}

function happyPrint(string){
  console.log("😀: "+string);
 }
 
 function sadPrint(string){
  console.log("😢: "+string);
 }
 
 function add(a, b, callback){
    let ans = a + b;
    callback(ans);
 }
 add(5, 10, happyPrint);
 add(11, 12, sadPrint);

 /*console.log("------------------------------------------------")
function printDate(){
  console.log(Date().toLocaleTimeString());
}
     
setInterval(printDate, 1000);*/

console.log("------------------------------------------------")
let arr = [12, 33, 4, 5, -4, 8, 19, 25];
                
function double(num){
  return num * 2;
}

let doubledArr = arr.map(double); 
console.log(doubledArr);

function isOdd(num){
  return (element%2 !== 0); 
}
let odds = arr.filter(isOdd);
console.log(odds);

function has5Factor(){
  return ele % 5 === 0;
}

let hasFiveFactor = arr.some(has5Factor);
console.log(hasFiveFactor);

function intCompare(a, b){
 return a - b;
}

let ascending = arr.sort(intCompare)
console.log(ascending);
console.log("------------------------------------------------")
