class numberDataType {
  arr = []
  constructor(num) {
    this.arr.push(num)
  }
}

function checkType(num) {
  if (num == Number) {
    console.log("doroste!")
  } else {
    return false
  }
}

console.log(checkType(70))
