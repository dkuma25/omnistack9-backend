const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect('mongodb+srv://omnistack9:omnistack9@cluster0-lmjul.mongodb.net/omnistack9?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// mongoose.connect('mongodb://localhost:27017/omnistack9', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)