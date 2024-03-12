// function giveMe4(a,b,c,d){
//     console.log(`a : ${a}`);
//     console.log(`b : ${b}`);
//     console.log(`c : ${c}`);
//     console.log(`d : ${d}`);
// }

// const array=['apple','orange','banana','pomegranate'];
// giveMe4(array);


// let arr=[1,2,3];
// let arr2=[4,5];

// let resultArray=[...arr,...arr2];
// console.log(resultArray);

// const user={
//     name:"Sree",
//     age:19,
// };
// const resultObject={...user,location:"Erode"};
// console.log(resultObject);


//REST OPERATOR

function user (x,...username){
    console.log(x);
    console.log(username);
}
user("Sree",19,"Developer");