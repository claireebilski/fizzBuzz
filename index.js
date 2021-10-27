
exports.fizzBuzz = (number) => {
  const res = [] // small array of tasks

  for (let i = 1; i <= number; i++) {
    let count = i
    // mention BigO and local storage output - think trie 
    if (i % 3 === 0) count = 'Fizz'
    if (i % 5 === 0) count = 'Buzz'
    if (i % 3 === 0 && i % 5 === 0) count = 'FizzBuzz'

    res.push(count) //res.push statement - research
  }

  return res
}

//console.log(fizzBuzz([5]))
