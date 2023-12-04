

export default function createInt8TypedArray(length, position, value){
    let buffer = new ArrayBuffer(length)

    if (position >= length)
        throw new Error('Position outside range')

    let view = new DataView(buffer, position, 1)
    view.setInt8(0, value)

    return buffer
}