const datatoconnect=require('./db')
const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
const port = 5000
app.use(express.json())
app.use('/api/auth',require('./routes/auth.js'));
app.use('/api/note',require('./routes/note.js'));


app.listen(port, () => {
  console.log(`INoteBook app listening on port ${port}`)
})