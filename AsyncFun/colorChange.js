let h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            h1.style.color=color;
            resolve();
        }, delay);
    })
}

changeColor("pink",1000);
changeColor("orange",1000);

async function setWait(){
  await changeColor("pink",1000);
   await changeColor("orange",1000);
  await  changeColor("red",1000);
}

setWait();