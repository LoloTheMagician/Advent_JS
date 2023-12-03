
// const findNaughtyStep = (original, modified) => {
//     const noReps = new Set(...[original, modified].sort((a, b) => a.length - b.length))
//     return [
//         ...original,
//         ...modified
//     ].find(letter => !noReps.has(letter)) ?? ''
// }


// const findNaughtyStep = (original, modified) => {
//     if (original === modified) return ''
//     const ordered = [original, modified].sort((a, b) => a.length - b.length)
//     const no_reps = new Set(
//         ordered[0]
//     )
//     return [...ordered
//         .at(-1)]
//         .find(letter => !no_reps.has(letter))
// }

// const findNaughtyStep = (original, modified) => {
//     if (original.length === 0) return modified
//     return [...original, ...modified].find(letter => [original, modified].some(word => !word.includes(letter))) ?? ''
// }

// const findNaughtyStep = (original, modified) => {
//     if (original.length === '') return original
//     const compare_letter = []
//     const ordered = [original, modified]
//         .sort((a, b) => a.length - b.length)
//     ordered
//         .at(-1)
//         .split('')
//         .forEach((letter, index) => {
//             compare_letter.push([letter, ordered[0][index]])
//         })
//     return compare_letter
//         .find(letters => new Set(letters).size !== 1)
//         .at(0) ?? ''
// }

const findNaughtyStep = (original, modified) => {

    const [short, long] = [original, modified].sort((a, b) => a.length - b.length)

    for (const i in long) {
        const [letter_long, letter_short] = [long[i], short[i]]
        if (letter_long !== letter_short) return letter_long
    }

    return ''

}

console.log(findNaughtyStep('abcd', 'abcde'))
console.log(findNaughtyStep('stepfor', 'stepor'))
console.log(findNaughtyStep('iiii', 'iii'))
