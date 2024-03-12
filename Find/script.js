//The find() method is another built in array helper in js that allows you to find the first element in an array that matches a specific condition.It return the value of the first element that satisffies the given testing function or undefined if no element is found.

//EXAMPLE 1
const peoples=[
    {name :"huxn",age:19},
    {name :"sree",age:18},
    {name :"vishnu",age:21},
    {name :"dhinesh",age:19},
    {name :"kavitha",age:49},
    {name:"sree",age:89},
];

const res=peoples.find(p=>p.name=="sree");
console.log(res);

//EXAMPLE 2

const posts=[
    {id:1,content : "Good Post"},
    {id:2,content : "sad Post"},
    {id:3,content : "funny Post"},
    {id:4,content : "Good Post"},
];
const postRes=posts.filter(p=>p.content=='Good Post');
console.log(postRes);

//EXERCISE 1
 const ages=[3,10,18,20,78];
 console.log(ages.find(p=>p>18)); //20
 console.log(ages.filter(p=>p>18));//20 78


 //EXERCISE 2

 const products=[
    {name :"Checkers",category:"Toys"},
    {name:"Harry Potter",category:"Books"},
    {name:"iphone",category:"Electronics"},
    {name:"Learn Php",category:"Books"},
 ];

 console.log(products.find(p=>p.category=="Books"));