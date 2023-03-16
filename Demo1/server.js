var http = require('http');

var url = require('url');

var utils = require('./utils');


const NhanVien = utils.NhanVien;

 tichSo = function(a,b) {
    let tich = a * b;
    return tich;
}


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('THANH HUAN\n')
  res.write('CP17310\n')
  res.write('Server Android\n')

  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  //xu li truy van co so du lieu MongoDB & tra dlieu cho clients
  res.write(txt);

  
  res.write('\nNgay thang hien tai:'+utils.myDateTime());
  res.write("\ntong 10 + 7 la: "+utils.tinhTong(10,7));
  res.write('\nCp17310_ Dinh Thanh Huan\n');
  res.write(utils.showInfor(214123));
  res.write("\ntich 10 X 7 la: " + tichSo(10,7)+"\n");



        var array = [];
        var nv1 = new utils.NhanVien('Thanh Huan88', '123');
        var nv2 = new utils.NhanVien('Van Quang', 'abc');
        var nv3 = new utils.NhanVien('Van Thanh', 'abc');
        var nv4 = new utils.NhanVien('Huan Huan', 'abc');
        array.push(nv1);
        array.push(nv2);
        array.push(nv3);
        array.push(nv4);
  


  for (var index = 0; index < array.length; index++) {
    var nv = array.at(index);
    res.write(nv.getInfor());
    
  }


  arr2 = array.filter((nv) =>{
      return (nv.ten != "Huan Huan");
  })

  res.write("----------LIST SAU KHI XOA--------\n");

  arr2.forEach(NhanVien => {
    res.write(NhanVien.getInfor()+ "\n");
  });
  

  //res.write(nv1.getInfor());

  return res.end();
}).listen(8000);//1 so vd khac:8000 ,3000,3030,8800,3300npm 