// code your solution here
function superbowlWin(array) {
  let obj = array.find((item) =>
    item.result === "W"
  )
  if (obj === undefined) {
    return undefined
  }
  else {
    return obj.year
  }

}
superbowlWin([
  { year: "2015", result: "O" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
])
