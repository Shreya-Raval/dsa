function findMax(nums){
    //if (nums.length === 0) would be explicit condition here and would be more preferrable
    if(nums.length){
        let max = nums[0];
        for(let i = 1; i < nums.length; i++){
            if(nums[i] > max){
                max = nums[i]
            }
        }
        return max;
    }
    //instead of return, use throw or return null
    //throw new Error('Given array is empty!'); 
    return new Error('Given array is empty!');
}

//AI GENERATED SOLUTION:
// function findMax(nums) {
//     if (nums.length === 0) {
//         throw new Error("Array is empty");
//     }

//     let max = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] > max) {
//             max = nums[i];
//         }
//     }

//     return max;
// }
const sampleArray = [3,4,6,7,10];
console.log(findMax(sampleArray));