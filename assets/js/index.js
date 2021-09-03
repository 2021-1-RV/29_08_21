//Соединить два массива в один без повторов (без одинаковых повторяющихся элементов)

function connect(arr) {
  let a = arr.concat()
  for (i = 0; i < a.length; ++i) {
    for (j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) a.splice(j--, 1)
    }
  }

  return a
}

const first = [1, 3, 4, 5, 7, 8, 11, 12, 14, 15]
const second = [1, 2, 4, 6, 7, 9, 10, 12, 13, 15]
const third = connect(first.concat(second))

console.log(third)
