import { Random } from './mock'
import { isMobile } from './ua'

// retrun several random sentences
export default function getSentences (min = 1, max = 6) {
  const sentences = sentenceArray[Random.pick([0, 1, 2])]
  const results = []

  let counts = Random.integer(min, isMobile ? 3 : max)
  while (counts--) {
    results.push(Random.pick(sentences))
  }
  return results.join('. ') + '.'
}

// Try Everything (From Zootopia)
const sentence1 = [
  "I messed up tonight I lost another fight",
  "I still mess up but I'll just start again",
  "I keep falling down I keep on hitting the ground",
  "I always get up now to see what's next",
  "Birds don't just fly they fall down and get up",
  "Nobody learns without getting it won",
  "I won't give up no I won't give in",
  "Till I reach the end and then I'll start again",
  "No I won't leave I wanna try everything",
  "I wanna try even though I could fail",
  "I won't give up no I won't give in",
  "Till I reach the end and then I'll start again",
  "No I won't leave I wanna try everything",
  "I wanna try even though I could fail",
  "Look at how far you've come you filled your heart with love",
  "Baby you've done enough that cut your breath",
  "Don't beat yourself up don't need to run so fast",
  "Sometimes we come last but we did our best",
  "I won't give up no I won't give in",
  "Till I reach the end and then I'll start again",
  "No I won't leave I wanna try everything",
  "I wanna try even though I could fail",
  "I won't give up no I won't give in",
  "Till I reach the end and then I'll start again",
  "No I won't leave I wanna try everything",
  "I wanna try even though I could fail",
  "I'll keep on making those new mistakes",
  "I'll keep on making them every day",
  "Those new mistakes"
]

// Dream It Possible (From Delacey)
const sentence2 = [
  "I will run I will climb I will soar",
  "I'm undefeated",
  "Jumping out of my skin pull the chord",
  "Yeah I believe it",
  "The past is everything we were don't make us who we are",
  "So I'll dream until I make it real and all I see is stars",
  "It's not until you fall that you fly",
  "When your dreams come alive you're unstoppable",
  "Take a shot chase the sun find the beautiful",
  "We will glow in the dark turning dust to gold",
  "And we'll dream it possible",
  "And we'll dream it possible",
  "I will chase I will reach I will fly",
  "Until I'm breaking until I'm breaking",
  "Out of my cage like a bird in the night",
  "I know I'm changing I know I'm changing",
  "In into something big better than before",
  "And if it takes takes a thousand lives",
  "Then it's worth fighting for",
  "It's not until you fall that you fly",
  "When your dreams come alive you're unstoppable",
  "Take a shot chase the sun find the beautiful",
  "We will glow in the dark turning dust to gold",
  "And we'll dream it possible",
  "It possible",
  "From the bottom to the top",
  "We're sparking wild fire's",
  "Never quit and never stop",
  "The rest of our lives",
  "From the bottom to the top",
  "We're sparking wild fire's",
  "Never quit and never stop",
  "It's not until you fall that you fly",
  "When your dreams come alive you're unstoppable",
  "Take a shot chase the sun find the beautiful",
  "We will glow in the dark turning dust to gold",
  "And we'll dream it possible",
  "And we'll dream it possible"
]

// The Climb (From Miley Cyrus)
const sentence3 = [
  "I can almost see it",
  "That dream I'm dreamin' but",
  "There's a voice inside my head saying",
  "You'll never reach it",
  "Every step I'm taking",
  "Every move I make feels",
  "Lost with no direction",
  "My faith is shakin",
  "But I I gotta keep tryin",
  "Gotta keep my head held high",
  "There's always gonna be another mountain",
  "I'm always gonna wanna make it move",
  "Always gonna be an uphill battle",
  "Sometimes I'm gonna have to lose",
  "Ain't about how fast I get there",
  "Ain't about what's waitin on the other side",
  "It's the climb",
  "The struggles I'm facing",
  "The chances I'm taking",
  "Sometimes might knock me down but",
  "No I'm not breaking",
  "I may not know it",
  "But these are the moments that",
  "I'm gonna remember most yeah",
  "Just gotta keep going",
  "And I I gotta be strong",
  "Just keep pushing on 'cause",
  "There's always gonna be another mountain",
  "I'm always gonna wanna make it move",
  "Always gonna be an uphill battle",
  "But Sometimes I'm gonna have to lose",
  "Ain't about how fast I get there",
  "Ain't about what's waitin on the other side",
  "It's the climb",
  "Yeah-yeah",
  "There's always gonna be another mountain",
  "I'm always gonna wanna make it move",
  "Always gonna be an uphill battle",
  "Sometimes you're gonna have to lose",
  "Ain't about how fast I get there",
  "Ain't about what's waitin on the other side",
  "It's the climb",
  "Yeah-yeah-yea",
  "Keep on moving",
  "Keep climbing",
  "Keep the faith",
  "Baby It's all about",
  "It's all about the climb",
  "Keep your faith",
  "Whoa O Whoa"
]

const sentenceArray = [
  sentence1,
  sentence2,
  sentence3
]
