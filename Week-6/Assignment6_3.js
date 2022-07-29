

function sort(a, n){ //n is the size of array - a
    var lo = 0;
    var mid = 0;
    var hi = n-1;
    var temp = 0;

    while(mid <= hi){
        if (a[mid] == 0) {
            temp = a[lo];
            a[lo] = a[mid];
            a[mid] = a[temp];
            lo++;
            mid++
        } else if(a[mid] == 1){
            mid++
        } else{
            temp = a[mid];
            a[mid] = a[hi];
            a[hi] = temp;
            hi--
        }
    }

}

function printArray(a,n) {
    let i;
    for (let i = 0; i < n; i++) {
        console.log('sorted array', a[i])
        
    }
    
}

let a = [0,2,1,2,1,0,0,2];
let n = a.length;
printArray(a,n)
sort(a,n);
console.log('after sorting');
printArray(a,n)