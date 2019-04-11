// Array Data
const names = ['Raisa', 'Budiman', 'Denny', 'Agus']

// -----------------------------------------------------------------------------

const showNames = names => {
  for (let index = 0; index < names.length; index++) {
    const name = names[index]

    console.log(`[${index + 1}] ${name}`)
  }
}

// Sort using FOR Loop # 1
const sortItems = names => {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let newItem = []

  for (let indexi = 0; indexi < alphabet.length; indexi++) {
    for (let indexj = 0; indexj < names.length; indexj++) {
      if (alphabet[indexi] === names[indexj][0]) {
        newItem.push(names[indexj])
      }
    }
  }

  return newItem
}

// Sort string using array.sort # 2
const sortNames = names => {
  return names.sort((item, comparator) => {
    if (item > comparator) return 1
    else if (item < comparator) return -1
    return 0
  })
}

// -----------------------------------------------------------------------------

showNames(names)
console.log('')

console.log(sortItems(names))
console.log('')

const sortedItems = sortItems(names)
showNames(sortedItems)
console.log('')

console.log(sortNames(names))
console.log('')

// Remove first data in array using shift and alert it
console.log(names.shift())
console.warn(names)
console.log('')

// Adding data in array using splice
console.log(names.splice(2, 0, 'Joko'))
console.log(names)
console.log('')

// Delete data in array using slice
console.log(names.slice(1, 3))
console.log('')
