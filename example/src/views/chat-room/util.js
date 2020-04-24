import { Random } from '../../common/mock'
import genUniqueId from '../../common/gen-unique-id'
import getSentences from '../../common/sentences'
import getUser from '../../common/user'

let sidCounter = 0
const maxCounts = 500

export function getMessages (numbers, delay) {
  return new Promise((resolve) => {
    if (sidCounter >= maxCounts) {
      resolve([])
      return
    }

    setTimeout(() => {
      const messages = []
      while (numbers--) {
        messages.push({
          user: getUser(),
          sid: genUniqueId(sidCounter++),
          content: getSentences(),
          images: []
        })
      }
      resolve(messages)
    }, delay ? Random.pick([200, 500, 800, 1000]) : 0)
  })
}

export function getSids (messages) {
  return messages.map((message) => message.sid)
}
