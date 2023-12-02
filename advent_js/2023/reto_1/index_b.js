const get_duplicates = (gifts) => {
    const reps_nums = gifts
        .filter((n, i) =>
            gifts.indexOf(n, i + 1) !== -1
        )

    if (reps_nums.length === 0) return -1

    return gifts[
        reps_nums
            .map(n => gifts.indexOf(n, gifts.indexOf(n) + 1))
            .sort()
            .at(0)
    ]

}