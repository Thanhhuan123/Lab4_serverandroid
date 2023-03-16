
const express = require('express');
const bodyparser = require('body-parser')


const app = express();

app.use(bodyparser.urlencoded({extended:true}))


app.get('',(req,res)=>{
    res.sendFile(__dirname+"/Calculator.html")
})

app.post('/',(req,res)=>{
 

  const s1 = Number(req.body.a)
  const s2 = Number(req.body.b)

  const tong = s1 + s2
  const hieu = s1 - s2
  const tich = s1 * s2
  const thuong = s1 / s2

  res.write("Tổng là :"+ tong)
  

})


app.listen(8000,(res)=>{
  
})