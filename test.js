import test from 'ava'
import p from '.'

test('Returns a string', async t => {
  await t.true(typeof p() === 'string')
})
