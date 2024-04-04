async function greet(){
    throw "week connection";
    return "hellow";
}

greet().then((res)=>{
    console.log("promise was resolve",res);
})
.catch((err)=>{
    console.log("week connection ",err);
})