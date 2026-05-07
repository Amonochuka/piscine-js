
function blockChain(data, prev = { index: 0, hash: '0' }) {
    const index = prev.index + 1
    const hash = hashCode(JSON.stringify({ data, index, hash: prev.hash }))

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