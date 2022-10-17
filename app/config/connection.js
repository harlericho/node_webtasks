const mongoose = require("mongoose");

mongoose.connect(process.env.URL_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "❌ ~ Error connecting to mongoDB"));
db.once("open", () => {
  console.log("🪲  ~ Connected to mongoDB");
});

module.exports = db;
