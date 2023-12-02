const manufacture = (regalos, materiales) => {
    return regalos.filter(regalo =>
        [...regalo]
            .every(letter => materiales.includes(letter))
    )
}

