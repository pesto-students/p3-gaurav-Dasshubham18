let M = [
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
];
let celebIdx = celebrity(M, 4);
if (celebIdx == -1) console.log("No Celebrity");
else {
  console.log("Celebrity ID " + celebIdx);
}
function celebrity(M, n) {
  // This function returns the celebrity
  // index 0-based (if any)
  let i = 0,
    j = n - 1;
  while (i < j) {
    if (M[j][i] == 1)
      // j knows i
      j--;
    // i knows j
    else i++;
  }
  // i points to our celebrity candidate
  let candidate = i;
  // Now, all that is left is to check that whether
  // the candidate is actually a celebrity i.e: he is
  // known by everyone but he knows no one
  for (i = 0; i < n; i++) {
    if (i != candidate) {
      if (M[i][candidate] == 0 || M[candidate][i] == 1) return -1;
    }
  }
  // if we reach here this means that the candidate
  // is really a celebrity
  return candidate;
}

//time Complexity = O(n)
//Space Complexity = O(1)
//