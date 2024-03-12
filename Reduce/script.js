//The reduce() method applies the reducer function to each element of an array accumulating the results into a single value.It is often used to perform calculations or aggregations on array elements and simplify the array into a single value.

//EXAMPLE 1
const numbers=[1,2,3,4,5];
const sum=numbers.reduce((p,c)=>{
    return p+c;
},1);
console.log(sum);

//EXAMPLE 2
const peoples=[
    {
        name:"Sree",
        age:19,
    },
    {
        name:"Huxn",
        age:29,
    },
    {
        name:"Alex",
        age:34,
    },
    {
        name:"Vis",
        age:21,
    },
];

 console.log(peoples.reduce((p,c)=>(c.age>p ?c.age:p),0));


 //EXERCISE

 const number=[2,3,4,5];
 console.log(number.reduce((p,c)=>p*c,1));

