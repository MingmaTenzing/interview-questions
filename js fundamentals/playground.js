const array = new Array(8).fill(0)

async function test() {
  const data = await fetch("http://www.omdbapi.com/?apikey=c17c1181&s=fast")
  const realdata = await data.json();
realdata.map((game) => game.title)
}

test();