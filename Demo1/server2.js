var http = require('http');
var fs = require('fs');
var utils = require('./utils');
http.createServer(function (req, res) {
    fs.readFile('mydata.json', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });

        
        var array = [];
        var nv1 = new utils.NhanVien('ABV', 'abc');
        var nv2 = new utils.NhanVien('ABV', 'abc');
        var nv3 = new utils.NhanVien('ABV', 'abc');
        var nv4 = new utils.NhanVien('ABC', 'abc');
        array.push(nv1);
        array.push(nv2);
        array.push(nv3);
        array.push(nv4);
        for (let index = 0; index < array.length; index++) {
            var nv = array.at(index);
            res.write(nv.getInFor());
        }
        array2 = array.filter((nv) => {
            return (nv.ten != "ABC");
        })
        res.write("List sau khi xoa: \n");
        array2.forEach((NhanVien) => {
            res.write(NhanVien.getInFor());
        });
        return res.end();
    });
}).listen(3030);