const express = require("express");
const blockchain = require("./routes/blockchain-routes");
const message = require("./routes/message-routes");

const app = express();

const PORT = process.argv[2];

app.use(express.json());

app.use("/api/v1/bc", blockchain);
app.use("/api/v1/message", message);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
