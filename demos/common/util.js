import { Random } from './mock.min'

const topTypeArr = [
    'NoHair',
    'Eyepatch',
    'Hat',
    'Hijab',
    'Turban',
    'WinterHat1',
    'WinterHat2',
    'WinterHat3',
    'WinterHat4',
    'LongHairBigHair',
    'LongHairBob',
    'LongHairBun',
    'LongHairCurly',
    'LongHairCurvy',
    'LongHairDreads',
    'LongHairFrida',
    'LongHairFro',
    'LongHairFroBand',
    'LongHairNotTooLong',
    'LongHairShavedSides',
    'LongHairMiaWallace',
    'LongHairStraight',
    'LongHairStraight2',
    'LongHairStraightStrand',
    'ShortHairDreads01',
    'ShortHairDreads02',
    'ShortHairFrizzle',
    'ShortHairShaggyMullet',
    'ShortHairShortCurly',
    'ShortHairShortFlat',
    'ShortHairShortRound',
    'ShortHairShortWaved',
    'ShortHairSides',
    'ShortHairTheCaesar',
    'ShortHairTheCaesarSidePart'
]
const accessoriesTypeArr = [
    'Blank',
    'Kurt',
    'Prescription01',
    'Prescription02',
    'Round',
    'Sunglasses',
    'Wayfarers'
]
const facialHairTypeArr = [
    'Blank',
    'BeardMedium',
    'BeardLight',
    'BeardMagestic',
    'MoustacheFancy',
    'MoustacheMagnum'
]
const facialHairColor = [
    'Auburn',
    'Black',
    'Blonde',
    'BlondeGolden',
    'Brown',
    'BrownDark',
    'Platinum',
    'Red'
]
const clotheTypeArr = [
    'BlazerShirt',
    'BlazerSweater',
    'CollarSweater',
    'GraphicShirt',
    'Hoodie',
    'Overall',
    'ShirtCrewNeck',
    'ShirtScoopNeck',
    'ShirtVNeck'
]
const clotheColor = [
    'Black',
    'Blue01',
    'Blue02',
    'Blue03',
    'Gray01',
    'Gray02',
    'Heather',
    'PastelBlue',
    'PastelGreen',
    'PastelOrange',
    'PastelRed',
    'PastelYellow',
    'Pink',
    'Red',
    'White'
]
const graphicTypeArr = [
    'Bat',
    'Cumbia',
    'Deer',
    'Diamond',
    'Hola',
    'Pizza',
    'Resist',
    'Selena',
    'Bear',
    'SkullOutline',
    'Skull'
]
const eyeTypeArr = [
    'Close',
    'Cry',
    'Default',
    'Dizzy',
    'EyeRoll',
    'Happy',
    'Hearts',
    'Side',
    'Squint',
    'Surprised',
    'Wink',
    'WinkWacky'
]
const eyebrowTypeArr = [
    'Angry',
    'AngryNatural',
    'Default',
    'DefaultNatural',
    'FlatNatural',
    'RaisedExcited',
    'RaisedExcitedNatural',
    'SadConcerned',
    'SadConcernedNatural',
    'UnibrowNatural',
    'UpDown',
    'UpDownNatural'
]
const mouthTypeArr = [
    'Concerned',
    'Default',
    'Disbelief',
    'Eating',
    'Grimace',
    'Sad',
    'ScreamOpen',
    'Serious',
    'Smile',
    'Tongue',
    'Twinkle',
    'Vomit'
]
const skinColorArr = [
    'Tanned',
    'Yellow',
    'Pale',
    'Light',
    'Brown',
    'DarkBrown',
    'Black'
]

export const getRandomAvatar = () => {
    return 'https://avataaars.io/?' + [
        `avatarStyle=Transparent`,
        `topType=${Random.pick(topTypeArr)}`,
        `accessoriesType=${Random.pick(accessoriesTypeArr)}`,
        `hatColor=${Random.pick(facialHairTypeArr)}`,
        `facialHairType=${Random.pick(facialHairTypeArr)}`,
        `facialHairColor=${Random.pick(facialHairColor)}`,
        `clotheType=${Random.pick(clotheTypeArr)}`,
        `clotheColor=${Random.pick(clotheColor)}`,
        `graphicType=${Random.pick(graphicTypeArr)}`,
        `eyeType=${Random.pick(eyeTypeArr)}`,
        `eyebrowType=${Random.pick(eyebrowTypeArr)}`,
        `mouthType=${Random.pick(mouthTypeArr)}`,
        `skinColor=${Random.pick(skinColorArr)}`
    ].join('&')
}

export const getRandomUser = () => {
    return {
        name: Random.name(),
        time: Random.date(),
        color: Random.color(),
        avatar: getRandomAvatar()
    }
}

export const getRandomHeight = () => Random.pick([40, 50, 80, 100, 140, 180])

export const getQuery = (query) => {
    try {
        return new URLSearchParams(window.location.search).get(query)
    } catch (e) {
        return false
    }
}

const ua = navigator.userAgent
const Android = !!ua.match(/Android/i)
export const iOS = !!ua.match(/iPhone|iPad|iPod/i)
export const isMobile = Android || iOS

export const debounce = (func, wait, immediate) => {
    let timeout
    return function () {
        const context = this
        const args = arguments
        const later = function () {
            timeout = null
            if (!immediate) {
                func.apply(context, args)
            }
        }
        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) {
            func.apply(context, args)
        }
    }
}

const oneThousand = 1000
const typeMap = {
    1: oneThousand,
    2: oneThousand * 10,
    3: oneThousand * 100
}
// browser will crash render 100,000 in example `without-virtual-list`.
const isWitoutVirtual = window.location.href.indexOf('without-virtual-list') > -1
const defaultCount = typeMap[isWitoutVirtual ? 2 : 3]
export const countStorage = {
    get () {
        try {
            return +sessionStorage.getItem('RENDER-COUNT') || defaultCount
        } catch (e) {
            return defaultCount
        }
    },

    set (type) {
        try {
            sessionStorage.setItem('RENDER-COUNT', typeMap[type] || defaultCount)
        } catch (e) {}
    }
}

export const settingStorage = {
    isShow () {
        try {
            return !!+(sessionStorage.getItem('SETTING-SHOW'))
        } catch (e) {
            return false
        }
    },

    setShow (isShow) {
        try {
            sessionStorage.setItem('SETTING-SHOW', isShow ? 1 : 0)
        } catch (e) {}
    }
}

export const reportPerformance = () => {
    const initTime = window.app_init_time
    const timeElement = document.getElementById('time')
    if (timeElement && initTime) {
        const timeWaste = Date.now() - initTime
        timeElement.textContent = 'Build waste: ' + timeWaste + ' ms.'
    }

    const memoryElement = document.getElementById('memory')
    const performance = window.performance || window.webkitPerformance
    if (memoryElement && performance && performance.memory && performance.memory.usedJSHeapSize) {
        const memoryUsed = parseInt(performance.memory.usedJSHeapSize / (1024 * 1024))
        memoryElement.textContent = 'Memory used: ' + memoryUsed + ' MB.'
    }
}
