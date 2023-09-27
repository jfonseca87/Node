const express = require('express')
const { Liquid } = require('liquidjs')
const fs = require('fs')

const app = express()
const engine = new Liquid({
  root: __dirname, // for layouts and partials
  extname: '.liquid'
})

app.engine('liquid', engine.express()) // register liquid engine
app.set('views', ['./views']) // specify the views directory
app.set('view engine', 'liquid') // set to default

app.get('/brief', function (req, res) {
  const brief = JSON.parse(fs.readFileSync('./data/brief.json', 'utf8'))
  res.render('brief-pdf', brief)
})

app.get('/templateone', function (req, res) {
  const templateone = JSON.parse(fs.readFileSync('./data/user.json', 'utf8'))
  res.render('member-mentioned-topic-email', templateone)
})

app.get('/templatetwo', function (req, res) {
  const templatetwo = JSON.parse(fs.readFileSync('./data/user-notification.json', 'utf8'))
  res.render('user-notification-email', templatetwo)
})

module.exports = app
