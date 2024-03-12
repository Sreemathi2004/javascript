const colours=["black","white","green"];
[color1,color2,color3]=colours;
console.log(color1);
console.log(color2);
console.log(color3);


const person={
    name:"Sreemathi",
    age:19,
    gender:"Female",
    country:"USA",
};

const {name:personName,age:personAge,country:personCountry}=person;

console.log(personName);
console.log(personAge);
console.log(personCountry);

const p={
    name:"Sreemathi",
    age:19,
    location:"Erode",
};

function print({name,age,location}){ 
    console.log(`Name : ${name}`);
    console.log(`Age : ${age}`);
    console.log(`Location : ${ location}`);
}

print(p);


function ternary(value){
    return value==20?"yes":"no";
}
console.log(ternary(20));


const pri={
    name:"Sreemathi",
    age:20,
    location:"Erodians",
};

for(let keys in pri){
    console.log(`${keys} : ${pri[keys]}`);
}

const arr=[1,2,3,4,5];
for(let k in arr){
    console.log(`${k} : ${arr[k]}`);
}

const object={
    a:"sree",
    b:"kavi",
    c:"murugan",
};
for(let keys in object){
    console.log(`${keys} : ${object[keys]}`);
}

const arr1=["sree","kavitha","murugan","karthika"];
for(let keys of arr1){
    console.log(keys);
}

const str="Sreemathi";
for(let k of str){
    console.log(k);
}

const c=['teal','blue','red','green'];
c.forEach(n=>console.log(n));

const words=["hello","bird","table","football","pipe","code"];
const capWords=words.forEach((word,index,arr)=>{
    arr[index]=word[0].toUpperCase()+word.substring(1);
});
console.log(words);


//FOR EACH
const number=[1,2,3,4,5,6,7,8,9,10];
let sum1=0;
number.forEach(n=> sum1+=n);
console.log(sum1);


let numbers=[1,2,3,4,5];
let sum=0;
function adder(number){
    sum+=number;
}
numbers.forEach(adder);
console.log(sum);