export function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max + 1)
  return Math.floor(Math.random() * (max - min)) + min
}

export function range(min = 0, max = 1) {
  let rangeValues = []
  for (let i = min; i <= max; i++) {
    rangeValues.push(i)
  }
  return rangeValues
}
