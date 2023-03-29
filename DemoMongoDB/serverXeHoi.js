const express = require('express')
const app = express()
const port = 3000


const mongoose = require('mongoose');

const uri = 'mongodb+srv://huandtph28593:huan1243@thanhhuan.az8i7jl.mongodb.net/CP17310?retryWrites=true&w=majority'


const xeHoiModel = require('./xeHoiModel');


app.get('/', async (req, res) => {

  await mongoose.connect(uri);
  
  console.log("ket noi thanh cong mongoDB");
  // let xehois = await xeHoiModel.find({nam: 2020});
  let xehois = await xeHoiModel.find();
// ==========insert================

  // let kq = await xeHoiModel.insertMany([{
  //   ten:"Car6",
  //   namsx:2020,
  //   gia:385732
  // }])
  
// ==========update================
  // let update = await xeHoiModel.updateOne(
  //   {ten:"Car6"},[
  //   {$set:{gia:99999999999}}
  // ])

  // ==========remove================

let update = await xeHoiModel.deleteOne(
    {ten:"hahaha"})
    
    //============================
    
  console.log(xehois);
  res.send(xehois);

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  // xeHoiModel.updateOne();
  // xeHoiModel.updateMany();
  // xeHoiModel.deleteOne();
  // xeHoiModel.deleteMany();