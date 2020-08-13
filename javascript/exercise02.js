const replaceLetters = (sentence, oldLetter, newLetter) => {
  if (!oldLetter || !newLetter || !sentence.length) return ('You did not pass in one of the following: sentence, letter that will be replaced, or a new letter.')

  for (let i = 0; i < sentence.length; i++) {
    (sentence[i] === oldLetter)
      ? newSentence.push(newLetter)
      : newSentence.push(sentence[i])
  }

  return newSentence
}

let sentence

sentence = 'Set on a bet.'
console.log('\n')
console.log(`The old sentence: ${sentence}\nThe new sentence is: ${replaceLetters(sentence, 'e', 'a')}`)


console.log('\n')
sentence = 'Hat pat.'
console.log(`The old sentence: ${sentnece}\nThe new sentence is: ${replaceLetters(sentence, 'a', 'o')}`)
console.log('\n')

