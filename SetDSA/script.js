//set is a built in data structure introducedd in that represents a collection of unique values.unlike arrays, set allows you to store only unique values which means duplicate values are automatically removed each value can occur only once within a set.

//set objects are useful when you need to store a list of unique elements and quickly check for the existence of a specific value.
const arr=[1,2,3,2,3,3,5,78,3];
const mySet=new Set(arr);

console.log(mySet.has(8));//false
console.log(mySet);

mySet.clear();
console.log(mySet);


//EXERCISE
const letters=new Set();
letters.add("a");
letters.add("b");
letters.add("c");


for(let k of letters){
    console.log(k);
}