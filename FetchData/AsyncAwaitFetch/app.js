let url = "https://catfact.ninja/fact";

async function getData(){
    let res= await fetch(url);
    let data= await res.json();
    console.log(data.fact); 
}

function fetchData(delay){
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        getData();
        resolve();
    }, delay);
   })  
}

async function loopData(){
    await fetchData(1000)
    await fetchData(2000)
    await fetchData(1000)
    await fetchData(1000)
}
//here in the above code we have created one getData() funtion in which we have called the fetch funtion to call the API since it will return the promise we have used await here cause may be he would get some issue while fething the data then that response we have stored in one variable called res and now to get the data from the api we have built in funtion called "json()"  since it also returns the promise we have stored that promise in the variabble name data and now this getData funtion will return the (data.facts) 2)
