# luxojr
Get pixels from image or buffer


## Installation
```bash
npm i --save luxojr
```

## Usage
```js
const parse = require('luxojr')
const fs = require('fs')
const path = require('path')


setImmediate(async () => {
    try {
        const file = path.join(__dirname, 'test.jpg')
        const result = await parse(file)

        console.log(result)
    } catch (error) {
        console.log("ERROR", error)
    }
})

```