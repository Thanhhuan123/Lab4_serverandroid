const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const cal = require("./caculator.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);
  const soA = Number(req.body.soA);
  const soB = Number(req.body.soB);
  const operator = req.body.operator;


  switch (operator) {
    case "cong":
      const tong = cal.add(soA, soB);
      res.send(`Tong cua ${soA} va ${soB} bang ${tong}`);
      break;
    case "tru":
      const hieu = cal.sub(soA, soB);
      res.send(`Tong cua ${soA} va ${soB} bang ${hieu}`);
      break;
    case "nhan":
      const tich = cal.mul(soA, soB);
      res.send(`Tong cua ${soA} va ${soB} bang ${tich}`);
      break;
    case "chia":
      const thuong = cal.div(soA, soB);
      res.send(`Tong cua ${soA} va ${soB} bang ${thuong}`);

      
      break;
  }
});

app.listen(8000);
