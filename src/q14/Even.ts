let number5 = Number(process.argv[2]);
for (let i = 0; i <=number5 ; i++){
if (i %2 !== 0) {
continue
}
console.log(String(i))
}