const parse = require('../src/index')
const fs = require('fs')
const path = require('path')


setImmediate(async () => {
    try {
        const file = path.join(__dirname, 'test.jpg')
        const buffer = await fs.readFileSync(file, {encoding: null})

        const result = await parse(buffer)
        console.log(result)
    } catch (error) {
        console.log("ERROR", error)
    }
})

