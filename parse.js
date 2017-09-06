// src
import { isJSON } from './utils'

const regex = /(.*), (\[.*\])/gi

export default data => {
    const output = []
    let match

    while ( match = regex.exec(data) ) {
        output.push({
            tag: match[1],
            data: {
                raw: match[2],
                parsed: isJSON(match[2]) ? JSON.parse(match[2]) : null
            }
        })
    }

    return output
}
