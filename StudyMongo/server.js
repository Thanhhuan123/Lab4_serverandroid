const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 3000



mongoose.connect('mongodb+srv://huandtph28593:huan1243@thanhhuan.az8i7jl.mongodb.net/DataBase')

mongoose.connection.once('open',function () {
    console.log("Connect thanh cong !")
    
})
.on('error',function(err){
    console.log(err)
})




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})