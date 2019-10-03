const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
var mysql = require('mysql')

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        title: 'Hello World',
        date: 'today'
    })
})
app.post('/user', (req, res) => {
    res.json({
        username: 'jude',
        email: 'jude@gmail.com',
        password: null
    })
})

app.get('/db/create/:username/:email/:password',(req, res) => {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'myapp'
      })
      
      connection.connect()
      let values = `${req.params.username}/${this.params.email}/${this.params.password}`;
      connection.query(`INSERT INTO accounts ('username', 'email', 'password' '${values}' `, function (err, rows, fields) {
        if (err) throw err
      
        res.json({
            data: rows,
            params: req.params,
            username: req.params.username
        })
      })
      
      connection.end()
})

app.get('/db/update/:username/:email/:password',(req, res) => {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'myapp'
      })
      
      connection.connect()
      let values = `${req.params.username}`;
      connection.query(`UPDATE set accounts username ='${req.params.username}' where id='${req.params.id}' `, function (err, rows, fields) {
        if (err) throw err
      
        res.json({
            data: rows,
            params: req.params,
            username: req.params.username
        })
      })
      
      connection.end()
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))