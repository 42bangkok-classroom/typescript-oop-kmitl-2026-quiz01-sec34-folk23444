const pass = process.argv[2] || "";

const valid =
  pass.length >= 8 &&
  /[0-9]/.test(pass) &&
  /[A-Z]/.test(pass) &&
  /[a-z]/.test(pass);

console.log(valid ? "Valid" : "Invalid");
