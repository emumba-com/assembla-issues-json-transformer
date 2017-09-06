// libs
import fs from 'fs'

export const readFile = fileName =>
    new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) reject(err)
            resolve(data)        
        })
    })

export const writeFile = (fileName, data) =>
    new Promise((resolve, reject) => {
      fs.writeFile(fileName, data, 'utf8', (err) => {
          if (err) reject(err)
          else resolve(data)
      })
    })

// courtesy: https://stackoverflow.com/a/3710226/162461
export const isJSON = str => {
    try {
        JSON.parse(str)
    } catch (e) {
        return false
    }
    return true
}