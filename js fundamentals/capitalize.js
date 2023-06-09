function capitalize(str) {
  const  strArray = str.split(" ");
  const capitlizedarr =[];
  
  for ( char of strArray) {
    capitlizedarr.push((char[0]).toUpperCase() + char.slice(1))
  }


  console.log( capitlizedarr.join(" "));
  

}

capitalize("mingma tenzing sherpa");
