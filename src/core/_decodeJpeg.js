const jpeg = require('jpeg-js')


module.exports = async (data) => {
    return new Promise((resolve, reject) => {
        try {
            const jpegData = jpeg.decode(data)

            if (!jpegData) {
                return reject(new Error("Error decoding jpeg"))
            }

            return resolve(jpegData)
        } catch (error) {
            return reject(error)
        }
    })
}

