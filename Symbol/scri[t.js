//Symbol is a unique and immutable primitive data type introduced in ES6 . A symbol is often used as an identifier for object properties to avoid potential naming conflicts.

//unlike strings or numbers , symbols are guaranteed to be unique.when you create a symbol , it is unique and cannot be recreated or changed.this uniqueness ensures that symbols will not collide with other property names even if they have the same string representation

 const mySymbol = Symbol("My Custom symbol");

 console.log(mySymbol);


 //comparing symbols
 const sym1=Symbol("");
 const sym2=Symbol("My custom");
 console.log(sym1===sym2);//false

 const obj={
    
 };
 obj[sym1]="value 1";
 obj[sym2]="value 2";

 console.log(obj); 