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
/**
 *
 *
 * @param {*} regalos
 * @param {string} materiales
 */
const manufacture = (regalos, materiales) => {
    const string = [...new Set(regalos.join(''))]
    const no_l = string
        .filter(l => !materiales.includes(l))
    return regalos
        .filter(regalo => !no_l.every(l => !regalo.includes(l)))
}

console.log(
    manufacture(['tren', 'oso', 'pelota'], 'tronesa')
)