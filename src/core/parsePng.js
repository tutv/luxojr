const PNG = require('pngjs').PNG
const ndarray = require('ndarray')


module.exports = async (data) => {
    const png = new PNG()

    return new Promise((resolve, reject) => {
        png.parse(data, (err, imageData) => {
            if (err) return reject(err)

            const {data, width, height} = imageData

            const result = ndarray(
                new Uint8Array(data),
                [width | 0, height | 0, 4],
                [4, 4 * width | 0, 1],
                0
            )

            return resolve(result)
        })
    })
}