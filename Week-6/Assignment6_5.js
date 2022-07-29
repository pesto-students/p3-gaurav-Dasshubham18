

function findPair(arr, n) {
    // Initialize positions of two elements
    let i = 0;
    let j = 1;
  
    // Search for a pair
    while (i < arr.length && j < arr.length) {
      if (i != j && arr[j] - arr[i] == n) {
        console.log("Pair Found: (" + arr[i] + ", " + arr[j] + ")");
        return true;
      } else if (arr[j] - arr[i] < n) j++;
      else i++;
    }
  
    console.log("No such pair");
    return false;
  }
  
  var arr = [1, 8, 30, 40, 100];
  findPair(arr, 60);