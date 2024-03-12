// function greet(){
//     console.log("Hello from function");
// }
// greet();
// greet();


// function sayHello(name){
//     console.log(`Hello ${name}`);
// }
// sayHello("Sreemathi");


// function add(num1,num2){
//     return num1+num2;
// }
// console.log(add(2,3));

// function myFunction(a,b){
//  return a*b;
// }
// console.log(myFunction(2,3));


//FUNCTION DECLARATION
// function sayHello(username){
//     console.log(`Hello ${username}`);
// }
// sayHello("Sreemathi")

//FUNCTION EXPRESSION
// let greet=function (name){
//     console.log(`Hello ${name}`);
// }
// greet('Sreekutty');

//CALLBACK FUNCTION

// function greeting(name,cb){
//     console.log(`Hello ,${name}`);
//     cb();
// }

// greeting("kavitha",function cb(){
//     console.log("Iam in cb");

// });

//EXERCISE
// function showCallFunc(fn){
//     let val=10;
//     fn(val);
// }
// showCallFunc(function(value){
//     console.log(`Value is ${value}`);
// });


//METHOD


// const person={
//      name:"Sreemathi",
//      age:19,
//      greets:function (){
//         return `Iam ${person.name} and Iam ${person.age} years old`;
//     },
// };

// console.log(person.greets());

const person={
    name:"Sreemathi",
    age:20,
    email:"sreemathik.m2004@gmail.com",
    isSubscribed:true,
    hobbies:["Reading","Running","Cooking"],
    address:{
        city:"New York",
        idk:true,
    },
};

//JSON.stringify()

const StringifyData=JSON.stringify(person);
console.log(StringifyData);

console.log(JSON.parse(StringifyData));

