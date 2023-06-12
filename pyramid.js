

function pyramid(n) { 

const colunmWidth = 2 * n - 1;
const middle = Math.floor(colunmWidth/2);

for (let row = 0; row <n; ++row) {
    let step = "";

    for (let column = 0; column < colunmWidth; ++column) {
        if (column >=middle - row && column <= middle + row) {
            step += "#"

        }
        else {
            step += " ";
        }
    }

    console.log(step)
}


    
}

pyramid(3);