function getNum(){
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        let randNum=Math.floor(Math.random()*10);
        console.log(randNum);
        resolve();
    }, 1000);
   })
}

async function demo(){
   await getNum();
   await  getNum();
    getNum();
}