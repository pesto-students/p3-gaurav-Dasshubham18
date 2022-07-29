function maxSum(arr,n){
    var currentMax = arr[0];
    var maxSoFar = arr[0];

    for(var i=1 ; i<n ; i++){
        currentMax = Math.max(arr[i], currentMax + arr[i]);
        maxSoFar = Math.max(maxSoFar , currentMax);

    }
    return maxSoFar;
}

const arr = [1, 2, 3, 4, 76];
const n = arr.length;
console.log('Max sum of contiguous array', maxSum(arr, n))