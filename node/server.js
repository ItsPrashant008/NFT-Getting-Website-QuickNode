require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Web3 } = require("web3");
const socketIO = require("socket.io");
const app = express();
app.use(cors());
app.use(express.json());

const Abi = require("./ABI.json");

const web3 = new Web3(process.env.QUICK_NODE_HTTP_PROVIDER);
const contractAddress = process.env.CONTRACT_ADDRESS;
const contract = new web3.eth.Contract(Abi, contractAddress);

const balanceOf = async (address) => {
  try {
    const nftBalance = await contract.methods.balanceOf(address).call();
    return Number(nftBalance);
  } catch (error) {
    console.error("NFT Balance Error->>>>>>>>>>>", error);
  }
};

app.post("/members", async (req, res) => {
  try {
    const address = req.body.address;
    const totalNFT = await balanceOf(address);
    if (totalNFT > 0) {
      res.status(200).json({
        status: true,
        message: `Congratulations You have ${totalNFT} NFT`,
      });
    } else {
      res
        .status(404)
        .json({ status: false, message: "You don't own any nft", totalNFT });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.post("/webhook", async (req, res) => {
  try {
    const account = req.body.address[0];
    const totalNFT = await balanceOf(account);
    console.log("In webhook account--->", totalNFT);

    io.emit("nftsUpdated", { userNFTs: totalNFT });
    res.status(200).json({
      status: 200,
      totalNFT: totalNFT,
      message: "Webhook is triggered!",
    });
  } catch (error) {
    console.error("Webhook error-->>", error);
    res
      .status(503)
      .json({ status: 200, message: "Something went wroing in Webhook!" });
  }
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Sever running at: http://localhost:${PORT}`);
});

const io = socketIO(server);
io.on("connection", () => {
  console.log("Connected");
});
