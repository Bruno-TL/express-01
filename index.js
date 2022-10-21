const express = require('express')
const chalk = require('chalk')
const morgan = require('morgan')
const app = express()
const port = 3000
const produtoRota = require('./controllers/produtos/route.js')

const morganMiddleware = morgan(function (tokens, req, res) {
  return [
      '\n\n\n',
      chalk.hex('#ff4757').bold('🍄  Bruno --> '),
      chalk.hex('#34ace0').bold(tokens.method(req, res)),
      chalk.hex('#ffb142').bold(tokens.status(req, res)),
      chalk.hex('#ff5252').bold(tokens.url(req, res)),
      '\n\n\n',
  ].join(' ');
});



app.use(express.json())
// app.use(morgan('tiny'))
app.use(morganMiddleware)
app.get('/', (req, res) => {
  res.send('Hello World!')
})




app.use('/', produtoRota)


app.use((req,res) => {
    res.status(404).send('{message: rota não encontrada}')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
