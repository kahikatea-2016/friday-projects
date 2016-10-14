var test = require('tape')
var routes = require('../server/routes')

// import code to be tested

test('that tests are working', function (t) {
  // arrange
  t.plan(1) // don't need this if you use end()
  var expected = 1

  // act
  var actual = 1

  // assert
  t.equal(actual, expected)
  t.end() // don't need this if you use plan()
})

test('api routes', function (t) {
  // arrange
  var expected = []

  // actual
  var actual = routes.getProjects()

  // assert
  t.equal(actual, expected)
  t.end()
})
