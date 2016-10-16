const test = require('tape')

// import code to be tested

test('test harness is working', function (t) {
  // arrange
  var expected = 1

  // act
  var actual = 1

  // assert
  t.equal(actual, expected)
  t.end()
})
