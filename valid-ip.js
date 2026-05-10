function findIP(str) {
    // octet: 0-255, no leading zeros
    // 0-9: single digit
    // 10-99: two digits
    // 100-199: 1 followed by two digits
    // 200-249: 2 followed by 0-4 and any digit
    // 250-255: 25 followed by 0-5
    const octet = '(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)'
    const ip = `${octet}\\.${octet}\\.${octet}\\.${octet}`
    
    // port: 0-65535
    // 0-9999: just digits
    // 10000-59999: 1-5 followed by 4 digits
    // 60000-65535: 6[0-5][0-5][0-3][0-5] roughly
    const port = '(:[0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])?'
    
    const regex = new RegExp(`\\b${ip}${port}\\b`, 'g')
    return str.match(regex) || []
}

const text = `
Valid: 192.168.0.1, 10.0.0.1:8080, 172.16.254.1:65535
Invalid: 256.100.50.25, 192.168.01.1, 10.0.0.1:70000
`

console.log(findIP(text))
// ['192.168.0.1', '10.0.0.1:8080', '172.16.254.1:65535']