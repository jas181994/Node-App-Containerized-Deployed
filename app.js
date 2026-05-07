const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('node app deployed through Github actions tested on eks tested through argocd ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

