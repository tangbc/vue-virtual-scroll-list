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
    'ShortHairTheCaesarSidePart',
]
const accessoriesTypeArr = [
    'Blank',
    'Kurt',
    'Prescription01',
    'Prescription02',
    'Round',
    'Sunglasses',
    'Wayfarers',
]
const facialHairTypeArr = [
    'Blank',
    'BeardMedium',
    'BeardLight',
    'BeardMagestic',
    'MoustacheFancy',
    'MoustacheMagnum',
]
const facialHairColor = [
    'Auburn',
    'Black',
    'Blonde',
    'BlondeGolden',
    'Brown',
    'BrownDark',
    'Platinum',
    'Red',
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
    'ShirtVNeck',
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
    'White',
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
    'Skull',
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
    'WinkWacky',
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
    'UpDownNatural',
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
    'Vomit',
]
const skinColorArr = [
    'Tanned',
    'Yellow',
    'Pale',
    'Light',
    'Brown',
    'DarkBrown',
    'Black',
]

export const getRandomAvatar = () => {
    return 'https://avataaars.io/?' + [
        `avatarStyle=Transparent`,
        `topType=${Random.pick(topTypeArr)}`,
        `accessoriesType=${Random.pick(accessoriesTypeArr)}`,
        `hatColor=${Random.pick(facialHairTypeArr)}`,
        `facialHairType=${Random.pick(facialHairTypeArr)}`,
        `facialHairColor=${Random.pick(facialHairColor)}`,
        // `clotheType=${Random.pick(clotheTypeArr)}`,
        `clotheColor=${Random.pick(clotheColor)}`,
        `graphicType=${Random.pick(graphicTypeArr)}`,
        `eyeType=${Random.pick(eyeTypeArr)}`,
        // `eyebrowType=${Random.pick(eyebrowTypeArr)}`,
        `mouthType=${Random.pick(mouthTypeArr)}`,
        `skinColor=${Random.pick(skinColorArr)}`,
    ].join('&')
}

export const getRandomUser = () => {
    return {
        name: Random.name(),
        time: Random.date(),
        color: Random.color(),
        avatar: getRandomAvatar(),
        // avatar: `https://api.adorable.io/avatars/100/${Random.name()}`
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
