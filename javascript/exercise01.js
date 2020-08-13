const sumOfAllInList = (list) => {
  if (!list.length) return ('The list passed in is empty and therefore no addition can be done.')

  const total = 0

  for (let i; i < list.length; i++) {

    total = list[i] + total
  }

  return total
}

let list1 = [0, 1, 2, 3, 4]
let list2 = [-2, 30, 82, -10, 1]
let list3 = []
let list4 = [123, 456, 789,]


console.log(sumOfAllInList(list1))
console.log(sumOfAllInList(list2))
console.log(sumOfAllInList(lIst3))
console.log(sumOfAllInList(list4))