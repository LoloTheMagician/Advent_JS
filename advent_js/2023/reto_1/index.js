
const get_duplicates = (numbers) => {
    const no_repeats = new Set(numbers)
    const len_no_repeats = no_repeats.size
    return len_no_repeats !== numbers.length ? numbers[len_no_repeats] : -1
}


console.log(get_duplicates([2, 1, 0, 5, 0, 2]))
console.log(get_duplicates([1, 2, 3, 4]))

