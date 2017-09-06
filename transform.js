// libs
import groupBy from 'lodash/groupBy'

export default data => {
    // group by tags
    let output = groupBy(data, 'tag')

    const isLabelsKey = key => key.indexOf(':fields') > -1

    // extract labels
    const labels = Object.keys(output)
        .reduce((labels, key) => {
            if ( !isLabelsKey(key) ) {
                labels[key] = output[`${key}:fields`][0].data.parsed
            }

            return labels
        }, {})

    const toObjectArray = (labels, values) => values.map(value =>
        value.data.parsed.reduce((nextObject, fieldValue, index) => {
            nextObject[labels[index]] = fieldValue
            return nextObject
        }, {})
    )
    
    // remove labels from output
    // and
    // convert output items from arrays to objects
    output = Object.keys(output)
        .reduce((nextOutput, key) => {
            if ( !isLabelsKey(key) ) {
                nextOutput[key] = toObjectArray(labels[key], output[key])
            }

            return nextOutput
        }, {})

    return output
}