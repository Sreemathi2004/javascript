//the every() and some() are 2 built in array methods in js that allow you to check the element of an array based on a given condition.Both methods take a callback function as an argument , which is applied to each element of the array.

//The every() method tests whether all elements in the array pass the condition specified by the provided callback fn .it return true if the callback fn returns true for every element and false if any element fails the condition.

//the some() method tests whether at least one element in the array passes the condition specified by the provided callback fn.it returns true if the callback fn return true for at least one element and false if no element passes the condition

const people=['huxn','jordan','alexr']

console.log(people.every(p=>p.length==5));
console.log(people.some(p=>p.length==5));


//EXERCISE
const products=[
    {name:"Checkers",category:"Toys"},
    {name:"Harry Potter",category:"Books"},
    {name:"iPhone",category:"Electronics"},
    {name:"Learn PHP",category:"Books"},
];

console.log(products.every(c=>c.category=="Books"));
console.log(products.some(c=>c.category=="Books"));