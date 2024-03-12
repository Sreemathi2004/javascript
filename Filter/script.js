//filter() method is a built in array method in js that allows you to create a new array containing elements that pass a certain condition.It provides a clean and concise way to filter out elements from an array based on a specified criteria.

  const songs=[
    {name:"Lucky You",duration :4.34},
    {name : "just like you",duration:3.23},
    {name:"The search",duration:2.33},
    {name:"Old town road",duration:1.43},
    {name:"The Box",duration:5.23},
  ];

  console.log(songs.filter(song=>song.duration>3));


  const computers=[
    {ram:4,hdd:100},
    {ram:8,hdd:200},
    {ram:16,hdd:300},
    {ram:32,hdd:400},
  ];

  console.log(computers.filter(c=>c.ram>8));
  console.log(computers.filter(c=>c.hdd>300) );

  //EXERCISE -1

  const ages=[32,33,16,40];
  console.log(ages.filter(a=>a>18));

  //EXERCISE - 2
  const words=[
    "spray","limit","elite","exuberant","destruction","present",
  ];
  console.log(words.filter(w=>w.length>6));  