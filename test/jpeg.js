const parseJpeg = require('../src/core/parseJpeg')
const fs = require('fs')
const path = require('path')


setImmediate(async () => {
    try {
        const file = path.join(__dirname, 'test.jpg')
        const buffer = await fs.readFileSync(file, {encoding: null})

        const s = await parseJpeg(buffer)
        console.log('s', s)
    } catch (error) {
        console.log("ERROR", error)
    }
})

