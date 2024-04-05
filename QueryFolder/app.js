let url = "http://universities.hipolabs.com/search?country=India&name=";
let btn = document.querySelector("button");
let inp=document.querySelector("input")
let ol=document.querySelector("#list");

async function getCollages(state) {
  try {
    let res = await axios.get(url + state);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log("error occured");
  }
}
function Show(collages) {
  ol.innerText="";
  for (col of collages) {
      let li=document.createElement("li");
      ol.appendChild(li);
      li.innerText=col.name;
  }
}

btn.addEventListener("click", async () => {
  let state = inp.value;
  console.log("Statename : ",state);
  let collages = await getCollages(state);
  Show(collages)
});



