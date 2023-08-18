function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2; 
  const actualSum = arr.reduce((sum, num) => sum + num, 0); 
  
  const missingNumber = expectedSum - actualSum; 
  return missingNumber;
}


