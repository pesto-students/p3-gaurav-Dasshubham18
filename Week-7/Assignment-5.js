function printNge(arr, n) {
  let s = [];

  s.push(arr[0]);

  for (let i = 0; i < n; i++) {
    if (s.length == 0) {
      s.push = arr[i];
      continue;
    }
    while ((s.length == 0) == false && s[s.length - 1] < arr[i]) {
      console.log(s[s.length - 1] + "-->" + arr[i] + "<br>");
      s.pop();
    }
    s.push(arr[i]);
  }
  while (s.length != 0) {
    console.log(s[s.length - 1] + "-->" + -1 + "<br>");
    s.pop();
  }
}

let arr = [11, 13, 21, 3];
let n = arr.length;
printNge(arr, n);

//Time complexity = O(n)
 //Space complexity = O(1)