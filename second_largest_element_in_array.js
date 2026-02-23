//Second Largest Element in an Array

/*function secondLargestElement(arr){
    if(arr.length && arr.length > 1){
        let maxElement = arr[0];
        let secondMax;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > maxElement){
                secondMax = maxElement;
                maxElement = arr[i];
            }
        }
        return secondMax;
    }
    throw new Error('Please provide a valid array length');
}

let myArray = [100,500,300,800,10000];
console.log(secondLargestElement(myArray)); */


//In the above code the missed condition is this one: arr[i] < maxElement && arr[i] > secondMax
//Updated code.

function secondLargestElement(arr){
    if(!Array.isArray(arr) || arr.length < 2){
        throw new Error("Please provide a valid array length");
    }
    let maxElement = -Infinity;
    let secondMax = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > maxElement){
            secondMax = maxElement;
            maxElement = arr[i];
        } else if(arr[i] < maxElement && arr[i] > secondMax){
            secondMax = arr[i];
        }
    }
    return (secondMax === -Infinity ? -1 : secondMax);
}