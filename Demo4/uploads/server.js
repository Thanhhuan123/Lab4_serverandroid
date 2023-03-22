const express = require('express')
const app = express()
const port = 8000
const bodyParser = require('body-parser')
const multer = require('multer');


var fs = require('fs');
const { error } = require('console');
//var upload = multer({storage:storage,limits:{fileSize:1*1024*1024}});

app.use(bodyParser.urlencoded({ extended: true }))

// SET STORAGE
var storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        let fileName = file.originalname;
        arr = fileName.split('.');
        let = newFileName = '';
        for (let i = 0; i < arr.length; i++) {
            if (i != arr.length - 1) {
                newFileName += arr[i];

            }else{
                newFileName += ('_' + Date.now() + '.'+arr[i]);
            }
            
        }


        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({storage:storage,limits:{fileSize:1*1024*1024}});

app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if (!file) {
        const error = new Error('Không có file nào để upload !!')
        error.httpStatusCode = 400
        return next(error)
    }

    // if (error instanceof multer.MulterError) {
    //     return res.send("kích thước file lớn hơn 1MB");
        
    // }else{
    //     return res.send("Tệp không xác định");
    // }
    res.send("Thành công!!")
    res.send(file)
})

//Uploading multiple files
app.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
    const files = req.files
    if (!files) {
        const error = new Error('Please choose files')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(files)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/upload.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});