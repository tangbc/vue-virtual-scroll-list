import genUniqueId from '../../common/gen-unique-id'
import getSentences from '../../common/sentences'
import getUser from '../../common/user'

export function getMessages (numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const messages = []
      let count = numbers
      while (count--) {
        const index = numbers - count
        messages.push({
          user: getUser(),
          sid: genUniqueId(index),
          content: getSentences(),
          images: []
        })
      }
      resolve(messages)
    }, 500)
  })
}
