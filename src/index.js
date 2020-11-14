const fileType = require('file-type')
const toBuffer = require('./core/toBuffer')
const parseJpeg = require('./core/parseJpeg')
const parsePng = require('./core/parsePng')


module.exports = async (fileOrBuffer) => {
    const buffer = await toBuffer(fileOrBuffer)

    const typeResult = await fileType.fromBuffer(buffer)
    if (!typeResult) {
        throw new Error('Cannot detect file type.')
    }

    const {mime} = typeResult

    if (mime === 'image/jpeg' || mime === 'image/jpg') {
        return parseJpeg(buffer)
    }

    if (mime === 'image/png') {
        return parsePng(buffer)
    }

    throw new Error("Unsupported file type: " + mime)
}

