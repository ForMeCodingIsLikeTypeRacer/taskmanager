const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
    {
        list: {type: String, required: true},
        task: {type: String, required: false}
    }
)

module.exports = mongoose.model("List",ListSchema);