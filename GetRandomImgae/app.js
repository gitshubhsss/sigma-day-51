let btn=document.querySelector("button");
let url='https://dog.ceo/api/breeds/image/random';

let dogImg=document.querySelector("img");

async function getRandImge(){
   try{
    let randImg= await axios.get(url);
    let link= randImg.data.message;
    dogImg.setAttribute("src",link)
   }
   catch(err){
    console.log("error ccoufd");
   }
}

btn.addEventListener("click",getRandImge);