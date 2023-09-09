require("dotenv").config();
const axios = require("axios");

const headers = {
  accept: "application/json",
  "x-api-key": process.env.QUICK_NODE_API_KEY,
};

const data = {
  name: "NFT Transfer",
  expression:
    "KHR4X2xvZ3NfdG9waWMxID1+ICc5YTkzRGZDQ0E4NTVkMGFlMTExYjJBZDFDNDhBNkYxYTk2ODMyZEY4JykgJiYNCih0eF9sb2dzX2FkZHJlc3MgPT0gJzB4MzQxMkNkM0VmODc2N2Y2OEQ3QTg5OURkNUQxNjVEMzk4OGI5OTkyNCcpICYmDQoodHhfbG9nc190b3BpYzAgPT0gJzB4ZGRmMjUyYWQxYmUyYzg5YjY5YzJiMDY4ZmMzNzhkYWE5NTJiYTdmMTYzYzRhMTE2MjhmNTVhNGRmNTIzYjNlZicp",
  network: "ethereum-sepolia",
  destinationIds: [process.env.DESTINATION_ID],
};

axios
  .post("https://api.quicknode.com/quickalerts/rest/v1/notifications", data, {
    headers,
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log("error", error));

// (tx_logs_topic1 =~ '9a93DfCCA855d0ae111b2Ad1C48A6F1a96832dF8') &&
// (tx_logs_address == '0x3412Cd3Ef8767f68D7A899Dd5D165D3988b99924') &&
// (tx_logs_topic0 == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef')
