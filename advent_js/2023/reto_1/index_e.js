const get_duplicates = (numbers) => {
    const numbs_reps = {}
    for (const num of numbers) {
        if (numbs_reps[num]) return num
        numbs_reps[num] = 1
    }
    return -1
}