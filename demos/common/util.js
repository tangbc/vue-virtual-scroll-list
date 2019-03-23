import { Random } from './mock.min'

export const getRandomUser = () => {
    const name = Random.name()
    return {
        name: name,
        email: Random.email(),
        avatar: `https://api.adorable.io/avatars/100/${name}`
        // avatar: `https://getavataaars.com/?hairColor=BrownDark&topType=LongHairStraight2`
    }
}
