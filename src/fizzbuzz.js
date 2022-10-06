export const fizzbuzz = (n) => {
  const multiples = {
    3: 'fizz',
    5: 'buzz'
  }
  const result = Object.keys(multiples)
    .filter((key) => n % key === 0)
    .map((key) => multiples[key])
    .join('')
  return result || n
}
