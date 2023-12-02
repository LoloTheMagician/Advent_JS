const manufacture = (regalos, materiales) => {
    return regalos.filter(regalo =>
        ![...regalo].find(letra => !materiales.includes(letra))
    )
}
