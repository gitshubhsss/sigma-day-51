//parse the javascript object to json formmat 

let jsData={
    fact: 'The oldest cat to give birth was Kitty who, at the age of 30, gave birth to two kittens. During her life, she gave birth to 218 kittens.',
    length: 136
  }

let jsonData=JSON.stringify(jsData);
console.log(jsonData);