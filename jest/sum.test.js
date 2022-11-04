const sum = require('./sum')
const clone = require('./clone')


test('clone arr func should to do', () => { 
  expect(clone([1,2,3])).toEqual([1,2,3])
})
 
test('sum func', () => {
  expect(sum(1, 2)).toBe(3)
  expect(sum(1, 2)).not.toBe(4)
})

test('more matchers', () => {
  const a = null
  expect(a).toBeNull()

  const b = undefined
  expect(b).toBeUndefined();

  const c = true
  expect(c).toBeTruthy()

  const d = false
  expect(d).toBeFalsy()

  const num = 10
  expect(num).toBeGreaterThan(7)
  expect(num).toBeGreaterThanOrEqual(10)
  expect(num).toBeLessThan(11)
  expect(num).toBeLessThanOrEqual(10)
})