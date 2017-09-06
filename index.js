// libs
import path from 'path'

// src
import { readFile, writeFile } from './utils'
import parse from './parse'
import transform from './transform'

const INPUT_FILE_PATH = path.resolve('/users/umar/Desktop/issues.json')
const OUTPUT_FILE_PATH = path.resolve('/users/umar/Desktop/issues_real.json')

readFile( INPUT_FILE_PATH )
    .then(parse)
    .then(transform)
    .then(data => writeFile(OUTPUT_FILE_PATH, JSON.stringify(data)))
    .catch(err => console.error(err))