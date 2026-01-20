const size = Number(process.argv[2]);

for (let i = 1; i <= size; i++) {
  let line = "";
  const char = i % 2 === 1 ? "1" : "0";

  for (let j = 0; j < size; j++) {
    line += char;
  }

  console.log(line);
}
