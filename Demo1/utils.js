exports.myDateTime = function () {
    return Date();
}

exports.tinhTong = function(a,b){
    let tong = a + b;
    return tong;
}
exports.showInfor = function(mess){
    if (typeof mess==='string' || mess instanceof String) {
        return "thong tin in ra la: "+ mess.toUpperCase();

    }else{
        return "kh co thong tin can in ra";
    }
}
exports.NhanVien = function(ten,maSV){
    this.ten = ten;
    this.maSV = maSV;

    this.getInfor = function(){
        return `${this.ten} - ${this.maSV} - ${this.getLuong()} \n`;
    }
    this.getLuong = function(){
        return 9 + Math.random() * 10;
    }
}
