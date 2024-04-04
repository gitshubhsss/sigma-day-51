let url = "https://catfact.ninja/fact";

//fetch the data using fetch(url) since fetch url return the promise so we can add the methods on it 
//like then and cathh in the cathc we pass the call backack res where the response is return and inside the 
//body the data is their . since the data is not in the readable form thats why we use .json method to make it readable
//since .json is also returns the promise we can apply  the then and catch methods on it so in the then method to 
//print the data we can pass the call back and print the data 

fetch(url)
  .then((res) => {
    console.log("response 1",res);
    return res.json();
  })
  .then((data) => {
    console.log("data 1 :", data.fact);
    return fetch(url);
  })
  .then((res2)=>{
    console.log("response 2 ",res2);
    return res2.json();
  })
  .then((data2)=>{
    console.log("data 2",data2.fact);
    return fetch(url);
  })
  .then((res3)=>{
    console.log("res 3:",res3);
    return res3.json();
  })
  .then((data3)=>{
    console.log(data3.fact);
  })
  .catch((err) => {
    console.log(err, "error occured");
  });
