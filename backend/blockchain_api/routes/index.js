var express = require('express');
var axios = require('axios');
var router = express.Router();
let { RpcClient } = require('tendermint')
const vstruct = require('varstruct')
const base32 = require('base32.js');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getdata', function(req, res, next) {
  axios.get('https://komodo.forest.network/tx_search?query=%22account=%27GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD%27%22')
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  res.send('helloworld');
});

router.get('/get', function(req, res){
  const Transaction = vstruct([
    { name: 'version', type: vstruct.UInt8 },
    { name: 'account', type: vstruct.Buffer(35) },
    { name: 'sequence', type: vstruct.UInt64BE },
    { name: 'memo', type: vstruct.VarBuffer(vstruct.UInt8) },
    { name: 'operation', type: vstruct.UInt8 },
    { name: 'params', type: vstruct.VarBuffer(vstruct.UInt16BE) },
    { name: 'signature', type: vstruct.Buffer(64) },
  ]);
  let publicKey = 'GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD'
  let client = RpcClient(`https://gorilla.forest.network:443/tx_search?query="account=%27${publicKey}%27"`)
  client.block({ height: 100 })
  .then((res) => {
    let base64Data = res.block.data.txs[0];
    let buffer = new Buffer(base64Data, 'base64');
    let data = Transaction.decode(buffer)
    let memo = data.memo.toString('ascii')
    let account = base32.encode(data.account)
    console.log(account)
  })
})



module.exports = router;
