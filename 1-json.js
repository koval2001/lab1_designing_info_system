const fs = require('fs')

/*const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)

fs.writeFileSync('1-json.json', bookJSON)
*/

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "Diana"
data.age = "20"

const myData = JSON.stringify(data)
fs.writeFileSync('1-json.json', myData)

//console.log(data)