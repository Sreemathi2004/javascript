//  function user(name,age,work){
//     return{
//         name:name,
//         age:age,
//       work,
//       intro:()=>console.log(`My name is ${name} & iam ${age} years old `),
//     };
//  }

//  let calls=user("Sree",19,"Developer");
//  calls.intro();

// let a=1;
// let b=2;
// let c=3;
//  let code={
//     a:a,
//     b:b,
//     c:c,
//  };



// console.log(code);

// const lib={
//     sum:(a,b)=>a+b,
//     mult:(a,b)=>a*b,
// };
// console.log(lib.sum(2,3));
// console.log(lib.mult(2,3));


function getperson(name,age,height){
    return{
        name,age,height,
    };
}
console.log(getperson("Sree",19,200));
 