const size = Number(process.argv[2]);

for (let i = 1; i <= size; i++) {
  let line = "";

  for (let j = 0; j < size; j++) {
    line += i;
  }

  console.log(line);
}
