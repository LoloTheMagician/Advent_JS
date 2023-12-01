
const get_duplicates = (numbers) => {
    const no_repeats = new Set(numbers)
    const len_no_repeats = no_repeats.size
    return len_no_repeats !== numbers.length ? numbers[len_no_repeats] : -1
}

console.log(get_duplicates([0, 1, 2, 3, 4, 5, 2, 3]))