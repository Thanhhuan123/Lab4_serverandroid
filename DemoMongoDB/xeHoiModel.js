const mongoose = require('mongoose');

const xeHoiSchema = new mongoose.Schema({
    ten:{
        type: String,
        require:true
    },
    namsx:{
        type:Number,

    },
    gia:{
        type:Number,
        default:0
    }
});


const xeHoiModel = new mongoose.model('xehoi',xeHoiSchema)

module.exports = xeHoiModel;
