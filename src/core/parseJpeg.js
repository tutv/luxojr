const ndarray = require('ndarray')
const _decodeJpeg = require('./_decodeJpeg')


module.exports = async (data) => {
    const jpegData = await _decodeJpeg(data)
    const nshape = [jpegData.height, jpegData.width, 4]
    const result = ndarray(jpegData.data, nshape)

    return result.transpose(1, 0)
}

