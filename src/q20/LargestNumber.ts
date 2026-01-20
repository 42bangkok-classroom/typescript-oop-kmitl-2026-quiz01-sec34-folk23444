const nums = process.argv.slice(2).map(Number);

let max = nums[0];

for (const n of nums) {
  if (n > max) {
    max = n;
  }
}

console.log(max);
