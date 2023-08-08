const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wordSchema = new Schema({
    engWord:{
        type: String,
        required: true
    },
    ukrWord:{
        type: String,
        required: true
    },
    engDescriptions:{
        type: [String],
        required: false
    },
    ukrDescriptions:{
        type: [String],
        required: false
    },
    hastag:{
        type: String,
        required: false
    },
    likes:{
        type: Number,
        default: 0,
        required: false
    },
    donatedBy:{
        type: String,
        required: true,
        default: "Ivanna Pukman"
    },
});

export default mongoose.model("Word", wordSchema);