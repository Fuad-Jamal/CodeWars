function findUniq(arr) {
  let ans = arr.sort((a,b) =>a-b)
  return ans[0] !==ans[1]? ans[0]:ans[arr.length -1]
}
​