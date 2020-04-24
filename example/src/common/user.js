import { Random } from './mock'

const getRandomAvatar = () => {
  return `https://avatars1.githubusercontent.com/u/${Random.integer(10000, 99999)}`
}

export default () => {
  return {
    name: Random.name(),
    avatar: getRandomAvatar()
  }
}
