const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const taskSchema = new Schema(
  {
    title: String,
    description: String,
    autor: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model(process.env.SCHEMA_MONGO, taskSchema);
