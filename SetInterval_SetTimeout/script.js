// setInterval(()=>console.log(`This function will every 2 seconds `),2000); 


// setTimeout(()=>console.log(`This function will be executed after 3 seconds`),3000);


const id=setInterval(
    ()=>console.log(`This function executing`),1000
);

setTimeout(()=>{
    clearInterval(id);
    console.log('This function stopped');
},10000);