//Using hashmap, with exact one solution problem
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i<nums.length; i++){
        let complement = target - nums[i];
        if(map.has(complement)){
            return [map.get(complement), i];
        }
        map.set(nums[i],i)
    }
};

// Using two pointer two sum for sorted array.

function sortedTwoSum(arr,target){
    let left = 0;
    let right = arr.length - 1;
    /* Chatgpt modified code version
     while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum === target) {
            return [left, right];
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }

    */
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === target){
            return [left, right];
        }
        sum > target ? right-- : left++;
    }
    return null;
}

let array = [1,2,3,4,5,6];
let findTarget = 7;
console.log(sortedTwoSum(array,findTarget));