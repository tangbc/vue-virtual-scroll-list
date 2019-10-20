export function getIndexList (count) {
  const list = []
  for (let i = 0; i < count; i++) {
    list.push('#' + i)
  }
  return list
}

const vars = [40, 50, 80, 100, 140, 160]
export function getVariableList (count) {
  const list = []
  for (let i = 0; i < count; i++) {
    list.push({
      text: '#' + i,
      height: vars[Math.floor(Math.random() * vars.length)]
    })
  }
  return list
}
