 
function solve(n) {
  let best = 0;
  let bestSum = 0;
​
  for (let i = 1; i <= n; i++) {
    let sum = i.toString().split('').reduce((a, b) => a + +b, 0);
​
    if (sum > bestSum || (sum === bestSum && i > best)) {
      best = i;
      bestSum = sum;
    }
  }
​
  return best;
}
​