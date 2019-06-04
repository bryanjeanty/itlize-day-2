function sum(...nums) {
  let mySum = 0;
  let i = 0;
  while (i < nums.length) {
    mySum += Number(nums[i]);
    i++;
  }
  return mySum;
}

console.log(sum(1, 2, 3, 4, 5, 10, 20));
