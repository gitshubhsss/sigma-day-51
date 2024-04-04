let url = "https://catfact.ninja/fact";
let btn=document.querySelector("button");
let p=document.querySelector(".result")

btn.addEventListener("click",printByTime)
    

async function getData(){
   try{
    let res=await axios.get(url);//we dont have parse the stirng here it will atomatic parse the string
    p.innerText=res.data.fact;
   }
   catch(err){
    console.log("No data found",err);
   }
}

function setTime(delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            getData();
            resolve();
        }, delay);
    })
}

async function printByTime(){
    await setTime(0)
   
}
