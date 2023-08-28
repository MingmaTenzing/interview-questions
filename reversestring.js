function reverseString(str) {
    let revString = ""; 
    for (let i=0; i<str.length; i++) {
     
        revString = str[i] + revString;
    

    }
    console.log(revString)
 
}

reverseString("me")