var express = require("express");
var axios = require("axios");
var router = express.Router();
const v1 = require("./v1");
const {
  Keypair
} = require('stellar-base');

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
      `https://komodo.forest.network/tx_search?query=%22account=%27${req.body.public_key}%27%22`
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
      res.send(result);
    })
    .catch(function (error) {
      console.log(error);
    });


});

// router.get("/sequence", function (req, res) {
//   let public_key = "GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD";
//   let data = [];
//   let count = 0;
//   axios.get("https://komodo.forest.network/tx_search?query=%22account=%27GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD%27%22").then(response => {
//     data = response.data
//     data.result.txs.map(tx => {
//       let buffer = new Buffer.from(tx.tx, "base64");
//       let decodedData = v1.decode(buffer);
//       if (decodedData.account === public_key) count++;
//     });
//   })

// })

router.post("/create_account", function (req, res) {
  var param = req.body
  console.log(req.body);
  
  let data = [];
  let count = 0
  const tx = {
    version: 1,
    account: public_key,
    sequence: 0,
    memo: Buffer.alloc(0),
    operation: 'create_account',
    params: {
      address: param.createdPublicKey
    },
  }
  // axios
  //   .get(
  //     "https://komodo.forest.network/tx_search?query=%22account=%27GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD%27%22"
  //   )
  //   .then(function (response) {
  //     data = response.data;
  //     data.result.txs.map(tx => {
  //       let buffer = new Buffer.from(tx.tx, "base64");
  //       let decodedData = v1.decode(buffer);
  //       if (decodedData.account === public_key) count++;
  //     })
  //   })
  //   .then(() => {
  //     tx.sequence = count + 1;
  //     v1.sign(tx, secret_key);
  //     let txHash = '0x' + v1.encode(tx).toString('hex')
  //     axios.get("https://komodo.forest.network/broadcast_tx_commit?tx=" + txHash).then((response) => {})
  //   })

  res.send("true");

});

router.get("/payment", function (req, res) {
  const secret_key = 'SC3JWTRTJM27OKO3V6XHRLN2CKJYNS3KIGT7E343ZAD2RQXFKYQSCY7Y'
  const public_key = 'GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD'
  let data = [];
  let count = 0
  const tx = {
    version: 1,
    account: public_key,
    sequence: 0,
    memo: Buffer.alloc(0),
    operation: 'payment',
    params: {
      address: 'GAYMLBODPBM5OTMNH3RZ46A2MJGQHWHJZVXXHPFOGTKI2OZQ2DLIMBXH',
      amount: 1000
    },
  }
  axios
    .get(
      "https://komodo.forest.network/tx_search?query=%22account=%27GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD%27%22"
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
      "https://komodo.forest.network/tx_search?query=%22account=%27GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD%27%22"
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
      let postBuf = Buffer.from(param.content, "utf8");
      tx.params.content = postBuf
      tx.sequence = count + 1
      v1.sign(tx, secret_key);
      let txHash = '0x' + v1.encode(tx).toString('hex')
      axios.get("https://komodo.forest.network/broadcast_tx_commit?tx=" + txHash).then((response) => {})
    })
  res.send("helloworld");
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
      "https://komodo.forest.network/tx_search?query=%22account=%27GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD%27%22"
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
      "https://komodo.forest.network/tx_search?query=%22account=%27GCPMFCBY3FMI4LCRQGVF6T5RJHYUQ5JKJKBW5Q6RUT5N7KPKGUYHP6CD%27%22"
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
      let updateBuf = Buffer.from("", "utf8");
      tx.sequence = count + 1
      tx.params.value = updateBuf
      v1.sign(tx, secret_key);
      let txHash = '0x' + v1.encode(tx).toString('hex')
      axios.get("https://komodo.forest.network/broadcast_tx_commit?tx=" + txHash).then((response) => {})
    })


  res.send("helloworld");
});

router.post('/login', function (req, res, next) {
  isLogin = req.body.isLogin;
  clientPublicKey = req.body.public_key
  res.send("true")
})

router.get('/login', function (req, res, next) {
  res.send({isLogin, clientPublicKey})
})


module.exports = router;