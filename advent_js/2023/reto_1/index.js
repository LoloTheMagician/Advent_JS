
// const get_duplicates = (numbers) => {
//     const no_repeats = new Set(numbers)
//     const len_no_repeats = no_repeats.size
//     return len_no_repeats !== numbers.length ? numbers[len_no_repeats] : -1
// }


// const get_duplicates = (numbers) => {
//     const no_repeats = new Set(numbers)
//     if (no_repeats.size === numbers.length) return -1
//     for (let i = 0; i < numbers.length; i++) {
//         if (no_repeats.has(numbers[i])) return numbers[i]
//         no_repeats.delete(numbers[i])
//     }
// }

// const get_duplicates = (gifts) => {
//     const no_repeats = new Set(gifts)
//     if (no_repeats.size === gifts.length) return -1
//     for (const gift of gifts)
//         if (!no_repeats.delete(gift)) return gift
// }

console.log(get_duplicates([2, 1, 3, 5, 3, 2]))
console.log(get_duplicates([1, 2, 3, 4]))

