const toRgb = require('hsl-to-rgb-for-reals')

const cycle = val => {
    if (val < 0) {
        return 360 + (val % 360)
    }

    return val % 360
}

const max = (val, n) => (val > n || val === Infinity) ? n : val

const min = (val, n) => (val < n) ? n : val

function hsl (hue, saturation, luminosity) {
    hue = cycle(hue)

    saturation = min(max(saturation, 100), 0)
    luminosity = min(max(luminosity, 100), 0)

    saturation /= 100
    luminosity /= 100

    const rgb = toRgb(hue, saturation, luminosity)

    return '#' + rgb.map(
        function (n) {
            return (256 + n).toString(16).substr(-2)
        }
    ).join('')
}

module.exports = hsl
