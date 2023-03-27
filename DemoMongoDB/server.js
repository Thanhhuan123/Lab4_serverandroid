const express = require('express')
const app = express()
const port = 3000

const { default: mongoose } = require('mongoose');

const uri = 'mongodb+srv://huandtph28593:huan1243@thanhhuan.az8i7jl.mongodb.net/DataBase?retryWrites=true&w=majority'


app.set('view engine', '.hbs');
app.set('views', './views');

// app.get('/', (req, res) => {
//   res.render('home', {layout: 'page2'});
//   mongoose.connect(uri).then(console.log("Ket noi DB thanh cong!!"));
// });
//

const svModel = require("./svModel");

app.get('/addSV', async function (req, res){

  console.log(req.body)
  await mongoose.connect(uri).then(console.log("Ket noi DB thanh cong!!"));

  const sv  = new svModel();
  sv.ten = "Dinh Thanh Huan";
  sv.tuoi = 22;
  sv.diachi = "Ha Noi";

  console.log('vao day')

  console.log(sv)
  

  try {
    await sv.save();
    res.send(sv);

  } catch (error) {
    console.log(error)
  }


});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

