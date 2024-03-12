//Map is a built in structure introduced in es6 that allows you to store key-value pairs where both the keys and values can be of any data type.it is similar to an object but with a few key differences

//keys can be of any data type
//Maintains insertion order
//iteration

  const map=new Map();

  const keyOne="string";
  const keyTwo={};
  const keyThree=function(){};

  map.set(keyOne,"value of key one");
  map.set(keyTwo,"Value of key two");
  map.set(keyThree,"value of key three");

  console.log(map.keys());
  console.log(map.values());
  console.log(map.delete(keyOne));
  console.log(map);
  console.log(map.size);


  //iteration

  for(let[key,value] of map){
    console.log(`${key} : ${value}`);
  }

  //keys

  for(let key of map.values()){
    console.log(key);
  }

  //EXERCISE

  const m=new Map();
  m.set("a",1);
  m.set("b",2);
  m.set("c",3);

  console.log(m.get("a"));
  console.log(`Size of map : ${m.size}`);
  m.delete("b");
  console.log(m.size);
