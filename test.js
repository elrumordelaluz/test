import test from 'ava'
import { date, version } from '.'

test('Returns a string', async t => {
  await t.true(typeof date() === 'string')
})
