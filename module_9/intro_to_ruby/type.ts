// strongly typed
function addTS(x: number, y: number): number {
    return x + y;
}

let sumTS: number = addTS(10, 10);

console.log(sumTS);

// // statically typed
let days = 7;
// days = 'N/A'