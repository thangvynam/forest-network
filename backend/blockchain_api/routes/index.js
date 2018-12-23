var express = require("express");
var axios = require("axios");
var router = express.Router();
const v1 = require("./v1");
const base32 = require('base32.js');
const fs = require("fs")
var isLogin = false;
var clientPublicKey = "";

/* GET home page. */

router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express"
  });
});

router.post("/getdata", function (req, res, next) {
  var data = [];
  var result = [];
  axios
    .get(
      `https://komodo.forest.network/tx_search?query=%22account=%27${req.body.public_key}%27%22&per_page=100`
    )
    .then(function (response) {
      data = response.data;
    })
    .then(() => {
      data.result.txs.map(tx => {
        let buffer = new Buffer.from(tx.tx, "base64");
        let decodedData = v1.decode(buffer);
        result.push(decodedData);
      });
    })
    .then(() => {
      res.send(result.reverse());
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.post("/broadcast", function (req, res) {
  let tx = req.body.tx;
  // tx.signature = Buffer.from(JSON.stringify(tx.signature))
  var temp = Buffer.from(JSON.stringify(tx.memo))
  var buf = Buffer.from(JSON.stringify(tx.signature));
  tx.memo = temp
  tx.signature = buf

  // console.log(tx);
  let txHash = '0x' + v1.encode(tx).toString('hex')
  // console.log(txHash);
  axios.get("https://komodo.forest.network/broadcast_tx_commit?tx=" + txHash)
  res.send("hello")
})

router.post("/create_account", function (req, res) {
  var param = req.body

  let data = [];
  let count = 0
  const tx = {
    version: 1,
    account: param.public_key,
    sequence: 0,
    memo: Buffer.alloc(0),
    operation: 'create_account',
    params: {
      address: param.createdPublicKey
    },
  }
  axios
    .get(
      `https://komodo.forest.network/tx_search?query=%22account=%27${param.public_key}%27%22&per_page=100`
    )
    .then(function (response) {
      data = response.data;
      data.result.txs.map(tx => {
        let buffer = new Buffer.from(tx.tx, "base64");
        let decodedData = v1.decode(buffer);
        if (decodedData.account === param.public_key) count++;
      })
    })
    .then(() => {
      tx.sequence = count + 1;
      tx.signature = Buffer.alloc(64, 0);
      const data = v1.encode(tx);
      // v1.sign(tx, "SC3JWTRTJM27OKO3V6XHRLN2CKJYNS3KIGT7E343ZAD2RQXFKYQSCY7Y");
      // let txHash = '0x' + v1.encode(tx).toString('hex')
      // console.log(tx2);

      let x = {
        data,
        tx
      }
      res.send(x);
    })
});

router.post("/payment", function (req, res) {
  var param = req.body
  const secret_key = 'SC3JWTRTJM27OKO3V6XHRLN2CKJYNS3KIGT7E343ZAD2RQXFKYQSCY7Y'
  const public_key = 'GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD'
  let data = [];
  let count = 0
  console.log(param.amount)
  const tx = {
    version: 1,
    account: public_key,
    sequence: 0,
    memo: Buffer.alloc(0),
    operation: 'payment',
    params: {
      address: param.address,
      amount: parseInt(param.amount)
    },
  }
  axios
    .get(
      "https://komodo.forest.network/tx_search?query=%22account=%27GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD%27%22&per_page=100"
    )
    .then(function (response) {
      data = response.data;
      data.result.txs.map(tx => {
        let buffer = new Buffer.from(tx.tx, "base64");
        let decodedData = v1.decode(buffer);
        if (decodedData.account === public_key) count++;
      })
    })
    .then(() => {
      tx.sequence = count + 1;
      v1.sign(tx, secret_key);
      let txHash = '0x' + v1.encode(tx).toString('hex')
      axios.get("https://komodo.forest.network/broadcast_tx_commit?tx=" + txHash).then((response) => {})
    })
  res.send("true");
});

router.post("/post", function (req, res) {
  const secret_key = 'SC3JWTRTJM27OKO3V6XHRLN2CKJYNS3KIGT7E343ZAD2RQXFKYQSCY7Y'
  const public_key = 'GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD'
  var param = req.body;
  let data = [];
  let count = 0
  const tx = {
    version: 1,
    account: public_key,
    sequence: 0,
    memo: Buffer.alloc(0),
    operation: 'post',
    params: {
      content: Buffer.alloc(0),
      keys: []
    },
  }
  axios
    .get(
      "https://komodo.forest.network/tx_search?query=%22account=%27GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD%27%22&per_page=100"
    )
    .then(function (response) {
      data = response.data;
      data.result.txs.map(tx => {
        let buffer = new Buffer.from(tx.tx, "base64");
        let decodedData = v1.decode(buffer);
        if (decodedData.account === public_key) count++;
      })
    })
    .then(() => {
      var text = {
        type: 1,
        text: param.content
      }
      tx.params.content = v1.PlainTextContent.encode(text)
      tx.sequence = count + 1
      v1.sign(tx, secret_key);
      let txHash = '0x' + v1.encode(tx).toString('hex')
      axios.get("https://komodo.forest.network/broadcast_tx_commit?tx=" + txHash).then((response) => {})
    })
  res.send("helloworld");
});

router.post("/get_content", function (req, res) {
  var param = req.body;
  let data = [];
  axios
    .get(
      `https://komodo.forest.network/tx_search?query=%22account=%27${param.public_key}%27%22&per_page=100`
    )
    .then(function (response) {
      data = response.data;
      data.result.txs.map(tx => {
        let buffer = new Buffer.from(tx.tx, "base64");
        let decodedData = v1.decode(buffer);
        if (decodedData.sequence === param.sequence) {
          let result = v1.PlainTextContent.decode(decodedData.params.content)
          res.send(result.text);
        }
      })
    })
  // res.send(null);
});

router.get("/update_name", function (req, res) {
  const secret_key = 'SC3JWTRTJM27OKO3V6XHRLN2CKJYNS3KIGT7E343ZAD2RQXFKYQSCY7Y'
  const public_key = 'GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD'
  let data = [];
  let count = 0
  const tx = {
    version: 1,
    account: public_key,
    sequence: 0,
    memo: Buffer.alloc(0),
    operation: 'update_account',
    params: {
      key: 'name',
      value: Buffer.alloc(0),
    },
  }
  axios
    .get(
      "https://komodo.forest.network/tx_search?query=%22account=%27GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD%27%22&per_page=100"
    )
    .then(function (response) {
      data = response.data;
      data.result.txs.map(tx => {
        let buffer = new Buffer.from(tx.tx, "base64");
        let decodedData = v1.decode(buffer);
        if (decodedData.account === public_key) count++;
      })
    })
    .then(() => {
      let updateBuf = Buffer.from("Hoang Phuc", "utf8");
      tx.sequence = count + 1
      tx.params.value = updateBuf
      v1.sign(tx, secret_key);
      let txHash = '0x' + v1.encode(tx).toString('hex')
      axios.get("https://komodo.forest.network/broadcast_tx_commit?tx=" + txHash).then((response) => {})
    })


  res.send("helloworld");
});

router.get("/update_picture", function (req, res) {
  const secret_key = 'SC3JWTRTJM27OKO3V6XHRLN2CKJYNS3KIGT7E343ZAD2RQXFKYQSCY7Y'
  const public_key = 'GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD'
  let data = [];
  let count = 0
  const tx = {
    version: 1,
    account: public_key,
    sequence: 0,
    memo: Buffer.alloc(0),
    operation: 'update_account',
    params: {
      key: 'picture',
      value: Buffer.alloc(0),
    },
  }
  axios
    .get(
      "https://komodo.forest.network/tx_search?query=%22account=%27GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD%27%22&per_page=100"
    )
    .then(function (response) {
      data = response.data;
      data.result.txs.map(tx => {
        let buffer = new Buffer.from(tx.tx, "base64");
        let decodedData = v1.decode(buffer);
        if (decodedData.account === public_key) count++;
      })
    })
    .then(() => {
      fs.readFile('D:\\Bai tap\\HK VII\\CNM\\Cuối kỳ\\forest-network\\backend\\blockchain_api\\routes\\barca2.jpg', function (err, data) {
        if (err) throw err;
        tx.sequence = count + 1
        tx.params.value = data
        v1.sign(tx, secret_key);
        let txHash = '0x' + v1.encode(tx).toString('hex')
        axios.get("https://komodo.forest.network/broadcast_tx_commit?tx=" + txHash).then((response) => {})
      });
    })


  res.send("helloworld");
});

router.post('/login', function (req, res, next) {
  isLogin = req.body.isLogin;
  clientPublicKey = req.body.public_key
  res.send("true")
})

router.get('/login', function (req, res, next) {
  res.send({
    isLogin,
    clientPublicKey
  })
})

router.get("/follow", function (req, res) {
  const secret_key = 'SC3JWTRTJM27OKO3V6XHRLN2CKJYNS3KIGT7E343ZAD2RQXFKYQSCY7Y'
  const public_key = 'GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD'
  let data = [];
  let followArr = [];
  let count = 0
  const tx = {
    version: 1,
    account: public_key,
    sequence: 0,
    memo: Buffer.alloc(0),
    operation: 'update_account',
    params: {
      key: 'followings',
      value: Buffer.alloc(0),
    },
  }
  axios
    .get(
      "https://komodo.forest.network/tx_search?query=%22account=%27GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD%27%22&per_page=100"
    )
    .then(function (response) {
      data = response.data;
      data.result.txs.map(tx => {
        let buffer = new Buffer.from(tx.tx, "base64");
        let decodedData = v1.decode(buffer);
        if (decodedData.account === public_key) count++;
        if (decodedData.params.key === 'followings') {
          try {
            followArr = v1.Followings.decode(decodedData.params.value).addresses
          } catch (error) {
            console.log(error);

          }
        }
      })
    })
    .then(() => {
      var buf = "GAYMLBODPBM5OTMNH3RZ46A2MJGQHWHJZVXXHPFOGTKI2OZQ2DLIMBXH" // nguoi se follow
      var arr = followArr; // danh sach da follow
      arr.push(base32.decode(buf))
      var add = {
        addresses: arr
      }
      tx.sequence = ++count
      tx.params.value = v1.Followings.encode(add);
      v1.sign(tx, secret_key);
      let txHash = '0x' + v1.encode(tx).toString('hex')
      axios.get("https://komodo.forest.network/broadcast_tx_commit?tx=" + txHash).then((response) => {})
    })
  res.send("helloworld");
});


router.get("/bandwidth", function (req, res) {
  const secret_key = 'SC3JWTRTJM27OKO3V6XHRLN2CKJYNS3KIGT7E343ZAD2RQXFKYQSCY7Y'
  const public_key = 'GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD'
  let bandwidth = 0;
  let oxy = 1 * 22020096 * 86400;
  let lastBandwidth = 0
  let inMoney = 0;
  let outMoney = 0;
  let balance = 0;
  let data = [];
  let ownData = [];
  axios
    .get(
      "https://komodo.forest.network/tx_search?query=%22account=%27GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD%27%22&per_page=100"
    )
    .then(function (response) {
      data = response.data;
      data.result.txs.map(tx => {
        // console.log(tx);
        let buffer = new Buffer.from(tx.tx, "base64");
        lastBandwidth = Buffer.byteLength(buffer)
        let decodedData = v1.decode(buffer);
        if (decodedData.operation === 'payment' && decodedData.params.address === public_key) {
          inMoney += decodedData.params.amount;
        } else if (decodedData.operation === 'payment' && decodedData.account === public_key) {
          outMoney += decodedData.params.amount;
        }
        if (decodedData.account === public_key) {
          ownData.push(tx)
        }
        balance = inMoney - outMoney
      })
    })
    .then(() => {
      axios
        .get("https://komodo.forest.network/block?height=" + ownData[ownData.length - 1].height)
        .then(response => {
          let bandwidthTime = new Date(response.data.result.block.header.time)
          let seconds = bandwidthTime.getTime() / 1000;
          let usedBandwidth = Math.ceil(Math.max(0, (86400 - seconds) / 86400) * lastBandwidth)
          bandwidth = balance * oxy / 9007199254740991 - usedBandwidth
          console.log(bandwidthTime);
          console.log(balance);
          console.log(bandwidth);
        })
    })


  res.send("helloworld");
});

module.exports = router;