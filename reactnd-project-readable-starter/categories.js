const clone = require('clone')
const config = require('./config')

let db = {}

const defaultData = {
  categories: [
      {
        name: 'react',
        path: 'react',
        description: 'A JavaScript library for building user interfaces.'
      },
      {
        name: 'redux',
        path: 'redux',
        description: 'Redux is a predictable state container for JavaScript apps.'
      },
      {
        name: 'udacity',
        path: 'udacity',
        description: 'Udacity is a for-profit educational organization founded by Sebastian Thrun, David Stavens, and Mike Sokolsky offering massive open online courses (MOOCs).'
      }
  ]
}

function getData (token) {
  //Each token has it's own copy of the DB. The token in this case is like an app id.
  let data = db[token]
  //This populates the default user data if there isn't any in the db.
  if (data == null) {
    data = db[token] = clone(defaultData)
  }
  return data
}

function getAll (token) {
  return new Promise((res) => {
    res(getData(token))    
  })
}

module.exports = {
  getAll
}
