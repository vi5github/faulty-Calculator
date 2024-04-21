let x = prompt("Enter the first Number");
let y = prompt("Enter the second number");
let op = prompt("Enter the operator");

let n = Math.random();

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
};

if(n < 0.1){
    let o = obj[op];
    alert(`The Result is ${eval(`${x} ${o} ${y}`)}`);
}else{
    console.log(`The Result is ${x} ${op} ${y}`);
    alert(`The Result is ${eval(`${x} ${op} ${y}`)}`);
}