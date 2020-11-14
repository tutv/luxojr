const parsePng = require('../src/core/parsePng')
const fs = require('fs')
const path = require('path')


setImmediate(async () => {
    try {
        const file = path.join(__dirname, 'test.png')
        const buffer = await fs.readFileSync(file, {encoding: null})
        console.log(buffer)

        const s = await parsePng(buffer)
        console.log(s)
    } catch (error) {
        console.log("ERROR", error)
    }
})

