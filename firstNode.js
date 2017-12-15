
// console.log("test node");
for(let j = 0; j < 5; j++){
    // console.log("Each J is " + j);
}
//node firstNode.js


let sum = 0;
let nonNumber = [];
for(let i= 2 ; i < process.argv.length; i++){
    if(isNaN(process.argv[i])){ //cannot use: if(process.argv[i] === NaN) because NaN === NaN is false
        nonNumber.push(process.argv[i]);
    }else{
        sum += parseInt(process.argv[i]);
        // console.log(process.argv[i]);
    }
    
}
if (process.argv[2] === undefined) {
    console.log("Error: not enough arguments")
} else {
// console.log(process.argv);
console.log(`Sum is ${sum} , NonNumbers: ${nonNumber}`)
}
//node firstNode.js 1 2 3
//node firstNode.js 4 H 5 e 6 y
