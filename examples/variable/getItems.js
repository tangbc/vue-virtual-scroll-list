
function getRandomInt (min, max) {
    return parseInt(Math.random() * (max - min + 1)) + min
}

export default function (count, heights = [30, 40, 50, 80, 100, 140, 180]) {
    let items = []

    count = parseInt(count, 10)

    while (count--) {
        items.push({
            height: heights[getRandomInt(0, heights.length - 1)]
        })
    }

    return items
}
