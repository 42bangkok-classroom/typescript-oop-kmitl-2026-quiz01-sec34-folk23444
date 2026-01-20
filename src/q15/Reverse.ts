const text = process.argv[2] || "";
let result = "";

for (let i = text.length - 1; i >= 0; i--) {
  result += text[i];
}

console.log(result);
