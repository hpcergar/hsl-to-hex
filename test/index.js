const hsl = require('../')
const {test} = require('tap')

test('pure white', ({is, end}) => {
    const expected = '#ffffff'
    const actual = hsl(0, 100,100)
    is(actual, expected, 'pure white')
    end()
})

test('medium gray', function(assert){
    const expected = '#808080'
    const actual = hsl(0, 0, 50)
    assert.is(actual, expected, 'gray')
    assert.end()
})

test('hue - red', ({is, end}) => {
    {
        const expected = '#ff0000'
        const actual = hsl(0, 100, 50)
        is(actual, expected, 'red')
    }
    {
        const expected = '#0000ff'
        const actual = hsl(240, 100, 50)
        is(actual, expected, 'blue')
    }
    {
        const expected = '#00ffff'
        const actual = hsl(180, 100, 50)
        is(actual, expected, 'cyan')
    }
    end()
})


test('degree overflow', function (assert) {
    var expected = hsl(1, 100, 50)
    var actual = hsl(361, 100, 50)
    var it = '361deg should be the same as 1deg'
    assert.is(actual, expected, it)
    assert.end()
})
test('degree underflow', function (assert) {
    var expected = hsl(-1, 100, 50)
    var actual = hsl(359, 100, 50)
    var it = '-1deg should be the same as 359deg'
    assert.is(actual, expected, it)
    assert.end()
})
test('max constraint', function (assert) {
    var expected = hsl(0, 101, 50)
    var actual = hsl(0, 100, 50)
    var it = '101% should be the same as 100%'
    assert.is(actual, expected, it)
    assert.end()
})
test('max constraint', function (assert) {
    var expected = hsl(0, -1, 50)
    var actual = hsl(0, 0, 50)
    var it = '-1% should be the same as 0%'
    assert.is(actual, expected, it)
    assert.end()
})