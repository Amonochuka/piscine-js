const hashCode = (str) =>
    ([...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0).toString(36)

function blockChain(data, prev = { index: 0, hash: '0' }) {
    const index = prev.index + 1
// Manually building the start of the string to ensure no hidden formatting issues
const hash = hashCode(`{"index":${index},"hash":"${prev.hash}","data":${JSON.stringify(data)}}`)

    const block = {
        index,
        hash,
        data,
        prev,
        chain: function(newData) {
            return blockChain(newData, block)
        }
    }

    return block
}