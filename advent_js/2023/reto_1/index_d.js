const get_duplicates = (numbers) => {
    const numbs_reps = []
    for (const num of numbers) {
        if (numbs_reps.includes(num)) return num
        numbs_reps.push(num)
    }
    return -1
}