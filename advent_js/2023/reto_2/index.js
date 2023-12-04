// const manufacture = (regalos, materiales) => {
//     return regalos.filter(regalo =>
//         [...regalo]
//             .every(letter => materiales.includes(letter))
//     )
// }

// const manufacture = (gifts, materials) => {
//     const big_gift = gifts.join('')
//     const no_repeat_letters = new Set(big_gift)
//     const no_letters = [...no_repeat_letters]
//         .filter(letter => !materials.includes(letter))
//     return gifts
//         .filter(gift => no_letters.every(letter => !gift.includes(letter)))
// }

// /**
//  *
//  *
//  * @param {*} regalos
//  * @param {string} materiales
//  */
// const manufacture = (regalos, materiales) => {
//     const string = [...new Set(regalos.join(''))]
//     const no_l = string
//         .filter(l => !materiales.includes(l))
//     return regalos
//         .filter(regalo => !no_l.every(l => !regalo.includes(l)))
// }

const manufacture = (gifts, materials) => {
    let gifts_no_materials = [...gifts]
    materials
        .split('')
        .forEach(letter => {
            gifts_no_materials = gifts_no_materials.map(gift =>
                gift.replaceAll(letter, '')
            )
        })
    return gifts.filter((_, i) => gifts_no_materials[i] === '')
}

function manufacture(gifts, materials) {
    const contadores = [0, 0, 0]
    materials
        .split('')
        .forEach(letter => {
            gifts.forEach((gift, index) => {
                if (gift.includes(letter))
                    contadores[index]++
            })
        })
    return gifts
        .filter((gift, index) =>
            new Set(gift).size === contadores[index]
        )
}

console.log(
    manufacture(['tren', 'oso', 'pelota'], 'tronesa')
)