import { Random } from '../../common/mock'
import getSentences from '../../common/sentences'
import getUser from '../../common/user'

let sidCounter = 0
const maxCounts = 500

export function genSid () {
  return `sid-${sidCounter++}`
}

export function genBody () {
  return {
    user: {},
    sid: '',
    content: '',
    images: [],
    isCreator: false
  }
}

export function getMessages (numbers, delay) {
  return new Promise((resolve) => {
    if (sidCounter >= maxCounts) {
      resolve([])
      return
    }

    setTimeout(() => {
      const messages = []
      while (numbers--) {
        let body = genBody()
        body.user = getUser()
        body.content = getSentences()
        body.sid = genSid()
        messages.push(body)
      }

      resolve(messages)
    }, delay ? Random.pick([300, 500, 800]) : 0)
  })
}

export function getSids (messages) {
  return messages.map((message) => message.sid)
}

export const LOAD_TYPES = {
  EMPTY: 'EMPTY',
  PAGES: 'PAGES',
  FEW: 'FEW'
}

export function setLoadType (type) {
  try {
    sessionStorage.setItem('LOAD_TYPES', type)
  } catch (e) {
    console.error(e)
  }
}

export function getLoadType () {
  try {
    return sessionStorage.getItem('LOAD_TYPES') || LOAD_TYPES.PAGES
  } catch (e) {
    console.error(e)
    return LOAD_TYPES.EMPTY
  }
}
