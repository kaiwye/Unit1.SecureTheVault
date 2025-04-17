let code1 = 7 + 3;
let code2 = 123 / 3 - 1;
let code3 = (38 % 39) + 1;

let message = "The vault has been secured. The combination is: ";

let codeA = code1 + "-" + code2 + "-" + code3;

console.log(codeA);

let codeB = `${code1}-${code2}-${code3}`;

console.log(codeB);

console.log(message);

console.log(message + codeA);
console.log(message + codeB);
