function threeSum(nums, target) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order.
  let closestSum = nums[0] + nums[1] + nums[2]; // Initialize closestSum with the sum of the first three elements.

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];

      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}

// Example usage
const S = [-1, 2, 1, -4];
const target = 1;
const closest = threeSum(S, target);
console.log("The sum closest to the target is:", closest);
