function findIP(str) {
    const octet =
        '(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)'

    const ip =
        `${octet}\\.${octet}\\.${octet}\\.${octet}`

    const validPort =
        '(?:[0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])'

    const regex = new RegExp(
        `(?<!\\d)(?:${ip}:${validPort}|${ip}(?!:))(?!\\d)`,
        'g'
    )

    return str.match(regex) || []
}

const text = `
Valid: 192.168.0.1, 10.0.0.1:8080, 172.16.254.1:65535
Invalid: 256.100.50.25, 192.168.01.1, 10.0.0.1:70000
`

console.log(findIP(text))