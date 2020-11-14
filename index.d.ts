type FileOrBuffer = string | Buffer

interface ndarray {
    data: Uint8Array,

    shape: Array<Number>,

    stride: Array<Number>,

    offset: Number
}

declare function parse(input: FileOrBuffer): Promise<ndarray>

export default parse

