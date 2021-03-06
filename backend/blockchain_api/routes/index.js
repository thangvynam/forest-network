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
        decodedData.height = tx.height;   
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

        if (decodedData.account === param.public_key) {
          count++;
        }
      })
    })
    .then(() => {
      tx.sequence = count + 1;
      tx.signature = Buffer.alloc(64, 0);
      res.send(tx);
    })
});

router.post("/payment", function (req, res) {
  var param = req.body
  let data = [];
  let count = 0
  const tx = {
    version: 1,
    account: param.public_key,
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
      res.send(tx);
    })
});

router.post("/post", function (req, res) {
  var param = req.body;
  let data = [];
  let count = 0
  const tx = {
    version: 1,
    account: param.public_key,
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
      var text = {
        type: 1,
        text: param.content
      }
      tx.params.content = v1.PlainTextContent.encode(text)
      tx.sequence = count + 1
      res.send(tx)
    })
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
});

router.post("/update_name", function (req, res) {
  var param = req.body;
  let data = [];
  let count = 0
  const tx = {
    version: 1,
    account: param.public_key,
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
      let updateBuf = Buffer.from(param.name, "utf8");
      tx.sequence = count + 1
      tx.params.value = updateBuf
      res.send(tx)
    })
});
router.get("/update_picture", function (req, res) {
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
        // v1.sign(tx, secret_key);
        // let txHash = v1.encode(tx).toString('base64')

        // axios.post("https://komodo.forest.network/", {
        //   "jsonrpc": "2.0",
        //   "id": 1,
        //   "method": "broadcast_tx_commit",
        //   "params": [`${txHash}`]
        // })
      });
    })


  res.send("helloworld");
});

router.post('/login', function (req, res, next) {
  isLogin = req.body.isLogin;
  if (isLogin)
    clientPublicKey = req.body.public_key
  else
    clientPublicKey = ''
  res.send("true")
})

router.get('/login', function (req, res, next) {
  res.send({
    isLogin,
    clientPublicKey
  })
})

router.post("/follow", function (req, res) {
  let param = req.body;
  let data = [];
  let followArr = [];
  let count = 0
  const tx = {
    version: 1,
    account: param.public_key,
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
      `https://komodo.forest.network/tx_search?query=%22account=%27${param.public_key}%27%22&per_page=100`
    )
    .then(function (response) {
      data = response.data;
      data.result.txs.map(tx => {
        let buffer = new Buffer.from(tx.tx, "base64");
        let decodedData = v1.decode(buffer);
        if (decodedData.account === param.public_key) count++;
        if (decodedData.params.key === 'followings') {
          try {
            followArr = v1.Followings.decode(decodedData.params.value).addresses
          } catch (error) {}
        }
      })
    })
    .then(() => {
      var buf = param.followKey
      var arr = followArr;
      arr.push(base32.decode(buf))
      var add = {
        addresses: arr
      }
      tx.sequence = ++count
      tx.params.value = v1.Followings.encode(add);
      res.send(tx);
    })

});


router.post("/bandwidth", function (req, res) {
  let param = req.body
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
      `https://komodo.forest.network/tx_search?query=%22account=%27${param.public_key}%27%22&per_page=100`
    )
    .then(function (response) {
      data = response.data;
      data.result.txs.map(tx => {
        let buffer = new Buffer.from(tx.tx, "base64");
        lastBandwidth = Buffer.byteLength(buffer)
        let decodedData = v1.decode(buffer);
        if (decodedData.operation === 'payment' && decodedData.params.address === param.public_key) {
          inMoney += decodedData.params.amount;
        } else if (decodedData.operation === 'payment' && decodedData.account === param.public_key) {
          outMoney += decodedData.params.amount;
        }
        if (decodedData.account === param.public_key) {
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
          let result = Math.round(bandwidth).toString()
          res.send(result);
        })
    })
});

router.post("/getImage", function (req, res) {

  let data = [];
  let value = '';
  axios
    .get(
      `https://komodo.forest.network/tx_search?query=%22account=%27${req.body.public_key}%27%22&per_page=100`
    )
    .then(function (response) {
      data = response.data;
      data.result.txs.map(tx => {
        let buffer = new Buffer.from(tx.tx, "base64");
        let decodedData = v1.decode(buffer);
        if (decodedData.operation === 'update_account' && decodedData.params.key === 'picture') {
          value = decodedData.params.value;
        }
      })
    }).then(() => {
      res.send(value.toString('base64'))
    })
});

router.post("/getFollow", function (req, res) {

  let data = [];
  let followArr = [];
  let pubKeyList = []
  axios
    .get(
      `https://komodo.forest.network/tx_search?query=%22account=%27${req.body.public_key}%27%22&per_page=100`
    )
    .then(function (response) {
      data = response.data;
      data.result.txs.map(tx => {
        let buffer = new Buffer.from(tx.tx, "base64");
        let decodedData = v1.decode(buffer);
        if (decodedData.operation === 'update_account' && decodedData.params.key === 'followings') {
          try {
            followArr = v1.Followings.decode(decodedData.params.value).addresses
          } catch (error) {}
        }
      })
    }).then(() => {
      followArr.forEach(add => {
        pubKeyList.push(base32.encode(add))
      })
      res.send(pubKeyList)
    })
});

router.post("/getName", function (req, res) {
  let data2 = []
  let name = "";
  axios.get(`https://komodo.forest.network/tx_search?query=%22account=%27${req.body.public_key}%27%22&per_page=100`).then(function (res) {
    data2 = res.data;
    data2.result.txs.map(tx => {
      let buffer = new Buffer.from(tx.tx, "base64");
      let decodedData = v1.decode(buffer);
      if (decodedData.operation === 'update_account' && decodedData.params.key === 'name') {
        name = decodedData.params.value.toString();
      }
    })
  }).then(() => {
    res.send(name)
  })
});

router.post("/comment", function (req, res) {
  let param = req.body
  let data = []
  let count = 0
  let hash = ""
  const tx = {
    version: 1,
    account: param.public_key,
    sequence: 0,
    memo: Buffer.alloc(0),
    operation: 'interact',
    params: {
      object: Buffer.alloc(0),
      content: Buffer.alloc(0)
    },
  }
  axios.get(`https://komodo.forest.network/tx_search?query=%22account=%27${param.public_key}%27%22&per_page=100`).then(function (res) {
    data = res.data;
    data.result.txs.map(tx => {
      let buffer = new Buffer.from(tx.tx, "base64");
      let decodedData = v1.decode(buffer);
      if (decodedData.account === param.public_key) count++;
      if (tx.height === param.height) hash = tx.hash;
    })
  }).then(() => {
    var text = {
      type: 1,
      text: param.content
    }
    tx.sequence = count + 1;
    tx.params.object = hash
    tx.params.content = v1.PlainTextContent.encode(text)
    res.send(tx)
  })
});

router.post("/react", function (req, res) {
  let param = req.body
  let data = []
  let count = 0
  let hash = ""
  const tx = {
    version: 1,
    account: param.public_key,
    sequence: 0,
    memo: Buffer.alloc(0),
    operation: 'interact',
    params: {
      object: Buffer.alloc(0),
      content: Buffer.alloc(0)
    },
  }
  axios.get(`https://komodo.forest.network/tx_search?query=%22account=%27${param.public_key}%27%22&per_page=100`).then(function (res) {
    data = res.data;
    data.result.txs.map(tx => {
      let buffer = new Buffer.from(tx.tx, "base64");
      let decodedData = v1.decode(buffer);
      if (decodedData.account === param.public_key) count++;
      if (tx.height === param.height) hash = tx.hash;
    })
  }).then(() => {
    var react = {
      type: 2,
      reaction: parseInt(param.reaction)
    }
    tx.sequence = count + 1;
    tx.params.object = hash
    tx.params.content = v1.ReactContent.encode(react) 
    res.send(tx)
  })
});


router.post("/get_height", function (req, res) {
  let param = req.body
  let data = []
  let tempTx = {}
  let block = []
  axios.get(`https://komodo.forest.network/tx_search?query=%22account=%27${param.public_key}%27%22&per_page=100`).then(function (res) {
    data = res.data;
  }).then(()=>{
    data.result.txs.map(tx => {
      let buffer = new Buffer.from(tx.tx, "base64");
      let decodedData = v1.decode(buffer);
      tempTx = {
        height: tx.height,
        tx: decodedData
      }
      block.push(tempTx)
    })     
  }).then(() => {
    res.send(block)
  })
});

module.exports = router;