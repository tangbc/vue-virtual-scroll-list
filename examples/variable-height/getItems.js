
function getRandomInt (min, max) {
    return parseInt(Math.random() * (max - min + 1)) + min
}

export default function (count, heights = [30, 40, 50, 80, 100, 140, 180]) {
    let items = []
    let ri = count
    let hl = heights.length

    while (ri--) {
        let index = getRandomInt(0, hl - 1)
        items.push({
            height: heights[index],
            title: `Item # ${count - ri - 1}`
        })
    }

    return items
}
