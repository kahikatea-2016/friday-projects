const test  = require('tape')
const tapSpec = require('tap-spec')
// You may need to set another const for relevant JS files

test ('initial', function (t) {
  t.plan(1)
  t.equal('a', 'a')
})


test('tell us what you are testing', function (t) {
  var whatYoureTesting = [] // whatever value you want to test
  var expected = expectedResult
  var actual = nowTest(whatYoureTesting) //nowTest would be in your JS file
  t.equal (actual, expected)
  t.end()
})

// If you forgot, this is how a test can look:
//
// test('scores a gutterball frame', function (t) {
//   var frame = [0, 0]
//   var expected = 0
//   var actual = game.scoreFrame(frame)
//   t.equal(actual, expected)
//   t.end()
// })
