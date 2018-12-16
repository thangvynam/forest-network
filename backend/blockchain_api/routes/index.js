var express = require("express");
var axios = require("axios");
var router = express.Router();
const v1 = require("./v1");
const {
  Keypair
} = require('stellar-base');

/* GET home page. */

router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express"
  });
});

router.get("/getdata", function (req, res, next) {
  var data = [];
  axios
    .get(
      "https://komodo.forest.network/tx_search?query=%22account=%27GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD%27%22"
    )
    .then(function (response) {
      data = response.data;
    })
    .then(() => {
      data.result.txs.map(tx => {
        let buffer = new Buffer.from(tx.tx, "base64");
        let decodedData = v1.decode(buffer);
        console.log(decodedData);
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pass to next layer of middleware
  res.send("helloworld");
});

router.get("/create_key", function (req, res) {
  const key = Keypair.random();
  console.log(key.secret());
  console.log(key.publicKey());
})

router.get("/create_account", function (req, res) {
  const secret_key = 'SC3JWTRTJM27OKO3V6XHRLN2CKJYNS3KIGT7E343ZAD2RQXFKYQSCY7Y'
  const public_key = 'GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD'
  const tx = {
    version: 1,
    account: public_key,
    sequence: 2,
    memo: Buffer.alloc(0),
    operation: 'create_account',
    params: {
      address: 'GCKOCZ5GAALFX2EZQOYOPX3KCMUCEXMEICL2Z4FMNNQB6S4WJQ4OMKVV'
    },
  }

  v1.sign(tx, secret_key);
  let txHash = '0x' + v1.encode(tx).toString('hex')
  axios.get("https://komodo.forest.network/broadcast_tx_commit?tx=" + txHash).then((response) => {
    console.log(response)
  })
  // console.log(txHash)

  
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pass to next layer of middleware
  res.send("helloworld");
});

// router.get('/get', function(req, res){
//   const Transaction = vstruct([
//     { name: 'version', type: vstruct.UInt8 },
//     { name: 'account', type: vstruct.Buffer(35) },
//     { name: 'sequence', type: vstruct.UInt64BE },
//     { name: 'memo', type: vstruct.VarBuffer(vstruct.UInt8) },
//     { name: 'operation', type: vstruct.UInt8 },
//     { name: 'params', type: vstruct.VarBuffer(vstruct.UInt16BE) },
//     { name: 'signature', type: vstruct.Buffer(64) },
//   ]);
//   let publicKey = 'GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD'
//   let client = RpcClient(`https://gorilla.forest.network:443/tx_search?query="account=%27${publicKey}%27"`)
//   client.block({ height: 100 })
//   .then((res) => {
//     let base64Data = res.block.data.txs[0];
//     let buffer = new Buffer(base64Data, 'base64');
//     let data = Transaction.decode(buffer)
//     let memo = data.memo.toString('ascii')
//     let account = base32.encode(data.account)
//     console.log(account)
//   })
// })

module.exports = router;