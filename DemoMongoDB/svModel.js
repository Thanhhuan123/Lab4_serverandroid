const mongoose = require("mongoose")


const SinhVien = new mongoose.Schema({

    ten:{
        type:String,
        require:true
    },
    tuoi:{
        type:Number,
    },
    diachi:{
        type:String,
    }

});

const SinhVienModel = mongoose.model("DB",SinhVien);

module.exports = SinhVienModel;