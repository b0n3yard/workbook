// TODO: Import express
const express = require('express')
const file = require('./terms.json')
const app = express()
// TODO: Import 'terms.json' file
const PORT = 3001;

app.use(express.static('./unsolved'))
// TODO: Initialize app variable
app.get('/api',(cro,sro)=>{
 sro.send(file)

})
// TODO: Create a route for a GET request that will return the content of our `terms.json` file

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
