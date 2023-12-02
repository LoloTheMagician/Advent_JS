const get_duplicates = (gifts) => {

    const reps_nums = gifts
        .map((n, i) =>
            gifts.indexOf(n, i + 1)
        )
        .filter(n => n !== -1)

    return reps_nums.length === 0
        ? -1
        : gifts[Math.min(...reps_nums)]

}