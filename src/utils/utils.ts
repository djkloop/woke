export function getRandomOption(arr: any[]) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}
