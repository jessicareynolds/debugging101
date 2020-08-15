const express = require('express')
const { greatHouses } = require('./public/data/pugExercise02')

const app = expres()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/exercise01', (request, response) => {
  return response.render('exercise01')
})

app.get('/exercise02', (request, response) => {
  return response.render('exercise02', greatHouses)
})

app.listen(1337, () => {
  console.log('Listening on port: 1337...')
})