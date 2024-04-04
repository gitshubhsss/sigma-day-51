let url = "https://icanhazdadjoke.com/";

async function getJokes() {
  try {
    const config = { headers: { Accept: "text/plain" } };
    let joke = await axios.get(url, config);
    console.log(joke.data.joke);
  } catch (err) {
    console.log("Error");
  }
}

