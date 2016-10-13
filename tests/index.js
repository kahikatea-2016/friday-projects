const test  = require('tape')

// import code to be tested

test ('that tests are working', function (t) {
  // arrange
  t.plan(1) // don't need this if you use end()
  var expected = 1

  // act
  var actual = 1

  // assert
  t.equal(actual, expected)
  t.end() // don't need this if you use plan()
})
