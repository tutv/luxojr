const fs = require('fs')


module.exports = async (data) => {
    if (Buffer.isBuffer(data)) return data

    if (typeof data !== 'string') {
        throw new Error('Data must be path of file or buffer.')
    }

    return new Promise((resolve, reject) => {
        fs.readFile(data, {encoding: null}, (error, data) => {
            if (error) return reject(error)

            return resolve(data)
        })
    })
}

